# `dataOciCoreInstanceConsoleConnections` Submodule <a name="`dataOciCoreInstanceConsoleConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceConsoleConnections <a name="DataOciCoreInstanceConsoleConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections oci_core_instance_console_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceConsoleConnections(Construct Scope, string Id, DataOciCoreInstanceConsoleConnectionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig">DataOciCoreInstanceConsoleConnectionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig">DataOciCoreInstanceConsoleConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetInstanceId">ResetInstanceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceConsoleConnections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreInstanceConsoleConnections.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreInstanceConsoleConnections.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreInstanceConsoleConnections.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreInstanceConsoleConnections.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreInstanceConsoleConnections resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreInstanceConsoleConnections to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreInstanceConsoleConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceConsoleConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList">DataOciCoreInstanceConsoleConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceConsoleConnections">InstanceConsoleConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList">DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.filter"></a>

```csharp
public DataOciCoreInstanceConsoleConnectionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList">DataOciCoreInstanceConsoleConnectionsFilterList</a>

---

##### `InstanceConsoleConnections`<sup>Required</sup> <a name="InstanceConsoleConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceConsoleConnections"></a>

```csharp
public DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList InstanceConsoleConnections { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList">DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnections.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceConsoleConnectionsConfig <a name="DataOciCoreInstanceConsoleConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceConsoleConnectionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null,
    string InstanceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#compartment_id DataOciCoreInstanceConsoleConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#id DataOciCoreInstanceConsoleConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#instance_id DataOciCoreInstanceConsoleConnections#instance_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#compartment_id DataOciCoreInstanceConsoleConnections#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#filter DataOciCoreInstanceConsoleConnections#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#id DataOciCoreInstanceConsoleConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#instance_id DataOciCoreInstanceConsoleConnections#instance_id}.

---

### DataOciCoreInstanceConsoleConnectionsFilter <a name="DataOciCoreInstanceConsoleConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceConsoleConnectionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#name DataOciCoreInstanceConsoleConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#values DataOciCoreInstanceConsoleConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#regex DataOciCoreInstanceConsoleConnections#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#name DataOciCoreInstanceConsoleConnections#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#values DataOciCoreInstanceConsoleConnections#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_console_connections#regex DataOciCoreInstanceConsoleConnections#regex}.

---

### DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections <a name="DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstanceConsoleConnectionsFilterList <a name="DataOciCoreInstanceConsoleConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceConsoleConnectionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.get"></a>

```csharp
private DataOciCoreInstanceConsoleConnectionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreInstanceConsoleConnectionsFilterOutputReference <a name="DataOciCoreInstanceConsoleConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceConsoleConnectionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList <a name="DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.get"></a>

```csharp
private DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference <a name="DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.serviceHostKeyFingerprint">ServiceHostKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.vncConnectionString">VncConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections">DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `ServiceHostKeyFingerprint`<sup>Required</sup> <a name="ServiceHostKeyFingerprint" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.serviceHostKeyFingerprint"></a>

```csharp
public string ServiceHostKeyFingerprint { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `VncConnectionString`<sup>Required</sup> <a name="VncConnectionString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.vncConnectionString"></a>

```csharp
public string VncConnectionString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceConsoleConnections.DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections">DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections</a>

---



