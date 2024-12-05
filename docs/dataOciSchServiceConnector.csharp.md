# `dataOciSchServiceConnector` Submodule <a name="`dataOciSchServiceConnector` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSchServiceConnector <a name="DataOciSchServiceConnector" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector oci_sch_service_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnector(Construct Scope, string Id, DataOciSchServiceConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig">DataOciSchServiceConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig">DataOciSchServiceConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSchServiceConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSchServiceConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSchServiceConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSchServiceConnector.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciSchServiceConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciSchServiceConnector resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciSchServiceConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciSchServiceConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSchServiceConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecyleDetails">LifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList">DataOciSchServiceConnectorSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList">DataOciSchServiceConnectorTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tasks">Tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList">DataOciSchServiceConnectorTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorIdInput">ServiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorId">ServiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecyleDetails"></a>

```csharp
public string LifecyleDetails { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.source"></a>

```csharp
public DataOciSchServiceConnectorSourceList Source { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList">DataOciSchServiceConnectorSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.target"></a>

```csharp
public DataOciSchServiceConnectorTargetList Target { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList">DataOciSchServiceConnectorTargetList</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tasks"></a>

```csharp
public DataOciSchServiceConnectorTasksList Tasks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList">DataOciSchServiceConnectorTasksList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ServiceConnectorIdInput`<sup>Optional</sup> <a name="ServiceConnectorIdInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorIdInput"></a>

```csharp
public string ServiceConnectorIdInput { get; }
```

- *Type:* string

---

##### `ServiceConnectorId`<sup>Required</sup> <a name="ServiceConnectorId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorId"></a>

```csharp
public string ServiceConnectorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSchServiceConnectorConfig <a name="DataOciSchServiceConnectorConfig" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServiceConnectorId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.serviceConnectorId">ServiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#service_connector_id DataOciSchServiceConnector#service_connector_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServiceConnectorId`<sup>Required</sup> <a name="ServiceConnectorId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.serviceConnectorId"></a>

```csharp
public string ServiceConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#service_connector_id DataOciSchServiceConnector#service_connector_id}.

---

### DataOciSchServiceConnectorSource <a name="DataOciSchServiceConnectorSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSource {

};
```


### DataOciSchServiceConnectorSourceCursor <a name="DataOciSchServiceConnectorSourceCursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceCursor {

};
```


### DataOciSchServiceConnectorSourceLogSources <a name="DataOciSchServiceConnectorSourceLogSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceLogSources {

};
```


### DataOciSchServiceConnectorSourceMonitoringSources <a name="DataOciSchServiceConnectorSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSources {

};
```


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails {

};
```


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces {

};
```


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics {

};
```


### DataOciSchServiceConnectorTarget <a name="DataOciSchServiceConnectorTarget" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTarget {

};
```


### DataOciSchServiceConnectorTargetDimensions <a name="DataOciSchServiceConnectorTargetDimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTargetDimensions {

};
```


### DataOciSchServiceConnectorTargetDimensionsDimensionValue <a name="DataOciSchServiceConnectorTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTargetDimensionsDimensionValue {

};
```


### DataOciSchServiceConnectorTasks <a name="DataOciSchServiceConnectorTasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTasks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSchServiceConnectorSourceCursorList <a name="DataOciSchServiceConnectorSourceCursorList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceCursorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.get"></a>

```csharp
private DataOciSchServiceConnectorSourceCursorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceCursorOutputReference <a name="DataOciSchServiceConnectorSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceCursorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor">DataOciSchServiceConnectorSourceCursor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorSourceCursor InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor">DataOciSchServiceConnectorSourceCursor</a>

---


### DataOciSchServiceConnectorSourceList <a name="DataOciSchServiceConnectorSourceList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.get"></a>

```csharp
private DataOciSchServiceConnectorSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceLogSourcesList <a name="DataOciSchServiceConnectorSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceLogSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.get"></a>

```csharp
private DataOciSchServiceConnectorSourceLogSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceLogSourcesOutputReference <a name="DataOciSchServiceConnectorSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceLogSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logId">LogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources">DataOciSchServiceConnectorSourceLogSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logId"></a>

```csharp
public string LogId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorSourceLogSources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources">DataOciSchServiceConnectorSourceLogSources</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.get"></a>

```csharp
private DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.get"></a>

```csharp
private DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```csharp
private DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get"></a>

```csharp
private DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```csharp
public DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList Metrics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">Namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```csharp
public DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList Namespaces { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails">NamespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources">DataOciSchServiceConnectorSourceMonitoringSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `NamespaceDetails`<sup>Required</sup> <a name="NamespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```csharp
public DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList NamespaceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorSourceMonitoringSources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources">DataOciSchServiceConnectorSourceMonitoringSources</a>

---


### DataOciSchServiceConnectorSourceOutputReference <a name="DataOciSchServiceConnectorSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.configMap">ConfigMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.cursor">Cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList">DataOciSchServiceConnectorSourceCursorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.logSources">LogSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList">DataOciSchServiceConnectorSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.monitoringSources">MonitoringSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList">DataOciSchServiceConnectorSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource">DataOciSchServiceConnectorSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigMap`<sup>Required</sup> <a name="ConfigMap" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.configMap"></a>

```csharp
public string ConfigMap { get; }
```

- *Type:* string

---

##### `Cursor`<sup>Required</sup> <a name="Cursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.cursor"></a>

```csharp
public DataOciSchServiceConnectorSourceCursorList Cursor { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList">DataOciSchServiceConnectorSourceCursorList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LogSources`<sup>Required</sup> <a name="LogSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.logSources"></a>

```csharp
public DataOciSchServiceConnectorSourceLogSourcesList LogSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList">DataOciSchServiceConnectorSourceLogSourcesList</a>

---

##### `MonitoringSources`<sup>Required</sup> <a name="MonitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.monitoringSources"></a>

```csharp
public DataOciSchServiceConnectorSourceMonitoringSourcesList MonitoringSources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList">DataOciSchServiceConnectorSourceMonitoringSourcesList</a>

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource">DataOciSchServiceConnectorSource</a>

---


### DataOciSchServiceConnectorTargetDimensionsDimensionValueList <a name="DataOciSchServiceConnectorTargetDimensionsDimensionValueList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTargetDimensionsDimensionValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.get"></a>

```csharp
private DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference <a name="DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue">DataOciSchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorTargetDimensionsDimensionValue InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue">DataOciSchServiceConnectorTargetDimensionsDimensionValue</a>

---


### DataOciSchServiceConnectorTargetDimensionsList <a name="DataOciSchServiceConnectorTargetDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTargetDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.get"></a>

```csharp
private DataOciSchServiceConnectorTargetDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorTargetDimensionsOutputReference <a name="DataOciSchServiceConnectorTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTargetDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue">DimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList">DataOciSchServiceConnectorTargetDimensionsDimensionValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions">DataOciSchServiceConnectorTargetDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DimensionValue`<sup>Required</sup> <a name="DimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue"></a>

```csharp
public DataOciSchServiceConnectorTargetDimensionsDimensionValueList DimensionValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList">DataOciSchServiceConnectorTargetDimensionsDimensionValueList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorTargetDimensions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions">DataOciSchServiceConnectorTargetDimensions</a>

---


### DataOciSchServiceConnectorTargetList <a name="DataOciSchServiceConnectorTargetList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.get"></a>

```csharp
private DataOciSchServiceConnectorTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorTargetOutputReference <a name="DataOciSchServiceConnectorTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs">BatchRolloverSizeInMbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs">BatchRolloverTimeInMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInKbs">BatchSizeInKbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInNum">BatchSizeInNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchTimeInSec">BatchTimeInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList">DataOciSchServiceConnectorTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.enableFormattedMessaging">EnableFormattedMessaging</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logGroupId">LogGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logSourceIdentifier">LogSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.objectNamePrefix">ObjectNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.topicId">TopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget">DataOciSchServiceConnectorTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchRolloverSizeInMbs`<sup>Required</sup> <a name="BatchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```csharp
public double BatchRolloverSizeInMbs { get; }
```

- *Type:* double

---

##### `BatchRolloverTimeInMs`<sup>Required</sup> <a name="BatchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs"></a>

```csharp
public double BatchRolloverTimeInMs { get; }
```

- *Type:* double

---

##### `BatchSizeInKbs`<sup>Required</sup> <a name="BatchSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInKbs"></a>

```csharp
public double BatchSizeInKbs { get; }
```

- *Type:* double

---

##### `BatchSizeInNum`<sup>Required</sup> <a name="BatchSizeInNum" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInNum"></a>

```csharp
public double BatchSizeInNum { get; }
```

- *Type:* double

---

##### `BatchTimeInSec`<sup>Required</sup> <a name="BatchTimeInSec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchTimeInSec"></a>

```csharp
public double BatchTimeInSec { get; }
```

- *Type:* double

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.dimensions"></a>

```csharp
public DataOciSchServiceConnectorTargetDimensionsList Dimensions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList">DataOciSchServiceConnectorTargetDimensionsList</a>

---

##### `EnableFormattedMessaging`<sup>Required</sup> <a name="EnableFormattedMessaging" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.enableFormattedMessaging"></a>

```csharp
public IResolvable EnableFormattedMessaging { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logGroupId"></a>

```csharp
public string LogGroupId { get; }
```

- *Type:* string

---

##### `LogSourceIdentifier`<sup>Required</sup> <a name="LogSourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logSourceIdentifier"></a>

```csharp
public string LogSourceIdentifier { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ObjectNamePrefix`<sup>Required</sup> <a name="ObjectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.objectNamePrefix"></a>

```csharp
public string ObjectNamePrefix { get; }
```

- *Type:* string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.topicId"></a>

```csharp
public string TopicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorTarget InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget">DataOciSchServiceConnectorTarget</a>

---


### DataOciSchServiceConnectorTasksList <a name="DataOciSchServiceConnectorTasksList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTasksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.get"></a>

```csharp
private DataOciSchServiceConnectorTasksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciSchServiceConnectorTasksOutputReference <a name="DataOciSchServiceConnectorTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciSchServiceConnectorTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchSizeInKbs">BatchSizeInKbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchTimeInSec">BatchTimeInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks">DataOciSchServiceConnectorTasks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchSizeInKbs`<sup>Required</sup> <a name="BatchSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchSizeInKbs"></a>

```csharp
public double BatchSizeInKbs { get; }
```

- *Type:* double

---

##### `BatchTimeInSec`<sup>Required</sup> <a name="BatchTimeInSec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchTimeInSec"></a>

```csharp
public double BatchTimeInSec { get; }
```

- *Type:* double

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.internalValue"></a>

```csharp
public DataOciSchServiceConnectorTasks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks">DataOciSchServiceConnectorTasks</a>

---



