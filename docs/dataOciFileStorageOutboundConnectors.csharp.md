# `dataOciFileStorageOutboundConnectors` Submodule <a name="`dataOciFileStorageOutboundConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageOutboundConnectors <a name="DataOciFileStorageOutboundConnectors" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors oci_file_storage_outbound_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectors(Construct Scope, string Id, DataOciFileStorageOutboundConnectorsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig">DataOciFileStorageOutboundConnectorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig">DataOciFileStorageOutboundConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFileStorageOutboundConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFileStorageOutboundConnectors.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFileStorageOutboundConnectors.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFileStorageOutboundConnectors.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFileStorageOutboundConnectors.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFileStorageOutboundConnectors resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFileStorageOutboundConnectors to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFileStorageOutboundConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageOutboundConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList">DataOciFileStorageOutboundConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.outboundConnectors">OutboundConnectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filter"></a>

```csharp
public DataOciFileStorageOutboundConnectorsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList">DataOciFileStorageOutboundConnectorsFilterList</a>

---

##### `OutboundConnectors`<sup>Required</sup> <a name="OutboundConnectors" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.outboundConnectors"></a>

```csharp
public DataOciFileStorageOutboundConnectorsOutboundConnectorsList OutboundConnectors { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageOutboundConnectorsConfig <a name="DataOciFileStorageOutboundConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#availability_domain DataOciFileStorageOutboundConnectors#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#compartment_id DataOciFileStorageOutboundConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#display_name DataOciFileStorageOutboundConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#id DataOciFileStorageOutboundConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#state DataOciFileStorageOutboundConnectors#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#availability_domain DataOciFileStorageOutboundConnectors#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#compartment_id DataOciFileStorageOutboundConnectors#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#display_name DataOciFileStorageOutboundConnectors#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#filter DataOciFileStorageOutboundConnectors#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#id DataOciFileStorageOutboundConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#state DataOciFileStorageOutboundConnectors#state}.

---

### DataOciFileStorageOutboundConnectorsFilter <a name="DataOciFileStorageOutboundConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#name DataOciFileStorageOutboundConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#values DataOciFileStorageOutboundConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#regex DataOciFileStorageOutboundConnectors#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#name DataOciFileStorageOutboundConnectors#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#values DataOciFileStorageOutboundConnectors#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#regex DataOciFileStorageOutboundConnectors#regex}.

---

### DataOciFileStorageOutboundConnectorsOutboundConnectors <a name="DataOciFileStorageOutboundConnectorsOutboundConnectors" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsOutboundConnectors {

};
```


### DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints {

};
```


### DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageOutboundConnectorsFilterList <a name="DataOciFileStorageOutboundConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.get"></a>

```csharp
private DataOciFileStorageOutboundConnectorsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFileStorageOutboundConnectorsFilterOutputReference <a name="DataOciFileStorageOutboundConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.get"></a>

```csharp
private DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints</a>

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsList <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.get"></a>

```csharp
private DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.get"></a>

```csharp
private DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.internalValue"></a>

```csharp
public DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks</a>

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.bindDistinguishedName">BindDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.isLockOverride">IsLockOverride</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretVersion">PasswordSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors">DataOciFileStorageOutboundConnectorsOutboundConnectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BindDistinguishedName`<sup>Required</sup> <a name="BindDistinguishedName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.bindDistinguishedName"></a>

```csharp
public string BindDistinguishedName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.endpoints"></a>

```csharp
public DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList Endpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.isLockOverride"></a>

```csharp
public IResolvable IsLockOverride { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.locks"></a>

```csharp
public DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList</a>

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `PasswordSecretVersion`<sup>Required</sup> <a name="PasswordSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretVersion"></a>

```csharp
public double PasswordSecretVersion { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.internalValue"></a>

```csharp
public DataOciFileStorageOutboundConnectorsOutboundConnectors InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors">DataOciFileStorageOutboundConnectorsOutboundConnectors</a>

---



