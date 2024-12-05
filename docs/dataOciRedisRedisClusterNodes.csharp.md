# `dataOciRedisRedisClusterNodes` Submodule <a name="`dataOciRedisRedisClusterNodes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRedisRedisClusterNodes <a name="DataOciRedisRedisClusterNodes" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes oci_redis_redis_cluster_nodes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodes(Construct Scope, string Id, DataOciRedisRedisClusterNodesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig">DataOciRedisRedisClusterNodesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig">DataOciRedisRedisClusterNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRedisRedisClusterNodes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRedisRedisClusterNodes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRedisRedisClusterNodes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRedisRedisClusterNodes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciRedisRedisClusterNodes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciRedisRedisClusterNodes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciRedisRedisClusterNodes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciRedisRedisClusterNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRedisRedisClusterNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList">DataOciRedisRedisClusterNodesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisNodeCollection">RedisNodeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList">DataOciRedisRedisClusterNodesRedisNodeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisClusterIdInput">RedisClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisClusterId">RedisClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.filter"></a>

```csharp
public DataOciRedisRedisClusterNodesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList">DataOciRedisRedisClusterNodesFilterList</a>

---

##### `RedisNodeCollection`<sup>Required</sup> <a name="RedisNodeCollection" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisNodeCollection"></a>

```csharp
public DataOciRedisRedisClusterNodesRedisNodeCollectionList RedisNodeCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList">DataOciRedisRedisClusterNodesRedisNodeCollectionList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RedisClusterIdInput`<sup>Optional</sup> <a name="RedisClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisClusterIdInput"></a>

```csharp
public string RedisClusterIdInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RedisClusterId`<sup>Required</sup> <a name="RedisClusterId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisClusterId"></a>

```csharp
public string RedisClusterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRedisRedisClusterNodesConfig <a name="DataOciRedisRedisClusterNodesConfig" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RedisClusterId,
    string DisplayName = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.redisClusterId">RedisClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#redis_cluster_id DataOciRedisRedisClusterNodes#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#display_name DataOciRedisRedisClusterNodes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#id DataOciRedisRedisClusterNodes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RedisClusterId`<sup>Required</sup> <a name="RedisClusterId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.redisClusterId"></a>

```csharp
public string RedisClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#redis_cluster_id DataOciRedisRedisClusterNodes#redis_cluster_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#display_name DataOciRedisRedisClusterNodes#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#filter DataOciRedisRedisClusterNodes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#id DataOciRedisRedisClusterNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciRedisRedisClusterNodesFilter <a name="DataOciRedisRedisClusterNodesFilter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#name DataOciRedisRedisClusterNodes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#values DataOciRedisRedisClusterNodes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#regex DataOciRedisRedisClusterNodes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#name DataOciRedisRedisClusterNodes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#values DataOciRedisRedisClusterNodes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#regex DataOciRedisRedisClusterNodes#regex}.

---

### DataOciRedisRedisClusterNodesRedisNodeCollection <a name="DataOciRedisRedisClusterNodesRedisNodeCollection" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesRedisNodeCollection {

};
```


### DataOciRedisRedisClusterNodesRedisNodeCollectionItems <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesRedisNodeCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRedisRedisClusterNodesFilterList <a name="DataOciRedisRedisClusterNodesFilterList" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.get"></a>

```csharp
private DataOciRedisRedisClusterNodesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciRedisRedisClusterNodesFilterOutputReference <a name="DataOciRedisRedisClusterNodesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.get"></a>

```csharp
private DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.privateEndpointFqdn">PrivateEndpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.privateEndpointIpAddress">PrivateEndpointIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.redisClusterId">RedisClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.shardNumber">ShardNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItems">DataOciRedisRedisClusterNodesRedisNodeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `PrivateEndpointFqdn`<sup>Required</sup> <a name="PrivateEndpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.privateEndpointFqdn"></a>

```csharp
public string PrivateEndpointFqdn { get; }
```

- *Type:* string

---

##### `PrivateEndpointIpAddress`<sup>Required</sup> <a name="PrivateEndpointIpAddress" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.privateEndpointIpAddress"></a>

```csharp
public string PrivateEndpointIpAddress { get; }
```

- *Type:* string

---

##### `RedisClusterId`<sup>Required</sup> <a name="RedisClusterId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.redisClusterId"></a>

```csharp
public string RedisClusterId { get; }
```

- *Type:* string

---

##### `ShardNumber`<sup>Required</sup> <a name="ShardNumber" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.shardNumber"></a>

```csharp
public double ShardNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciRedisRedisClusterNodesRedisNodeCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItems">DataOciRedisRedisClusterNodesRedisNodeCollectionItems</a>

---


### DataOciRedisRedisClusterNodesRedisNodeCollectionList <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesRedisNodeCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.get"></a>

```csharp
private DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList">DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollection">DataOciRedisRedisClusterNodesRedisNodeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.items"></a>

```csharp
public DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList">DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciRedisRedisClusterNodesRedisNodeCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollection">DataOciRedisRedisClusterNodesRedisNodeCollection</a>

---



