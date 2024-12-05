# `dataOciMeteringComputationQuery` Submodule <a name="`dataOciMeteringComputationQuery` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationQuery <a name="DataOciMeteringComputationQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query oci_metering_computation_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQuery(Construct Scope, string Id, DataOciMeteringComputationQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig">DataOciMeteringComputationQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig">DataOciMeteringComputationQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationQuery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationQuery.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMeteringComputationQuery resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMeteringComputationQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMeteringComputationQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryDefinition">QueryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList">DataOciMeteringComputationQueryQueryDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryIdInput">QueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryId">QueryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QueryDefinition`<sup>Required</sup> <a name="QueryDefinition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryDefinition"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinitionList QueryDefinition { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList">DataOciMeteringComputationQueryQueryDefinitionList</a>

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryIdInput"></a>

```csharp
public string QueryIdInput { get; }
```

- *Type:* string

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.queryId"></a>

```csharp
public string QueryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationQueryConfig <a name="DataOciMeteringComputationQueryConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string QueryId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.queryId">QueryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query#query_id DataOciMeteringComputationQuery#query_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryConfig.property.queryId"></a>

```csharp
public string QueryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_query#query_id DataOciMeteringComputationQuery#query_id}.

---

### DataOciMeteringComputationQueryQueryDefinition <a name="DataOciMeteringComputationQueryQueryDefinition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinition {

};
```


### DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi <a name="DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi {

};
```


### DataOciMeteringComputationQueryQueryDefinitionReportQuery <a name="DataOciMeteringComputationQueryQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionReportQuery {

};
```


### DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast {

};
```


### DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList <a name="DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.get"></a>

```csharp
private DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph">Graph</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">IsCumulativeGraph</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi">DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Graph`<sup>Required</sup> <a name="Graph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```csharp
public string Graph { get; }
```

- *Type:* string

---

##### `IsCumulativeGraph`<sup>Required</sup> <a name="IsCumulativeGraph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```csharp
public IResolvable IsCumulativeGraph { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi">DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---


### DataOciMeteringComputationQueryQueryDefinitionList <a name="DataOciMeteringComputationQueryQueryDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.get"></a>

```csharp
private DataOciMeteringComputationQueryQueryDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationQueryQueryDefinitionOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi">CostAnalysisUi</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery">ReportQuery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList">DataOciMeteringComputationQueryQueryDefinitionReportQueryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinition">DataOciMeteringComputationQueryQueryDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CostAnalysisUi`<sup>Required</sup> <a name="CostAnalysisUi" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList CostAnalysisUi { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationQueryQueryDefinitionCostAnalysisUiList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ReportQuery`<sup>Required</sup> <a name="ReportQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinitionReportQueryList ReportQuery { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList">DataOciMeteringComputationQueryQueryDefinitionReportQueryList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinition">DataOciMeteringComputationQueryQueryDefinition</a>

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.get"></a>

```csharp
private DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType">ForecastType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded">TimeForecastEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted">TimeForecastStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast">DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForecastType`<sup>Required</sup> <a name="ForecastType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType"></a>

```csharp
public string ForecastType { get; }
```

- *Type:* string

---

##### `TimeForecastEnded`<sup>Required</sup> <a name="TimeForecastEnded" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded"></a>

```csharp
public string TimeForecastEnded { get; }
```

- *Type:* string

---

##### `TimeForecastStarted`<sup>Required</sup> <a name="TimeForecastStarted" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted"></a>

```csharp
public string TimeForecastStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast">DataOciMeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get"></a>

```csharp
private DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryList <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionReportQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.get"></a>

```csharp
private DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference <a name="DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth">CompartmentDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName">DateRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast">Forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList">DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy">GroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag">GroupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">IsAggregateByTime</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType">QueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">TimeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">TimeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQuery">DataOciMeteringComputationQueryQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentDepth`<sup>Required</sup> <a name="CompartmentDepth" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```csharp
public double CompartmentDepth { get; }
```

- *Type:* double

---

##### `DateRangeName`<sup>Required</sup> <a name="DateRangeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```csharp
public string DateRangeName { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Forecast`<sup>Required</sup> <a name="Forecast" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList Forecast { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList">DataOciMeteringComputationQueryQueryDefinitionReportQueryForecastList</a>

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```csharp
public string[] GroupBy { get; }
```

- *Type:* string[]

---

##### `GroupByTag`<sup>Required</sup> <a name="GroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList GroupByTag { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a>

---

##### `IsAggregateByTime`<sup>Required</sup> <a name="IsAggregateByTime" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```csharp
public IResolvable IsAggregateByTime { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType"></a>

```csharp
public string QueryType { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeUsageEnded`<sup>Required</sup> <a name="TimeUsageEnded" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```csharp
public string TimeUsageEnded { get; }
```

- *Type:* string

---

##### `TimeUsageStarted`<sup>Required</sup> <a name="TimeUsageStarted" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```csharp
public string TimeUsageStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationQueryQueryDefinitionReportQuery InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQuery.DataOciMeteringComputationQueryQueryDefinitionReportQuery">DataOciMeteringComputationQueryQueryDefinitionReportQuery</a>

---


