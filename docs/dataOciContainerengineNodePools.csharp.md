# `dataOciContainerengineNodePools` Submodule <a name="`dataOciContainerengineNodePools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineNodePools <a name="DataOciContainerengineNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools oci_containerengine_node_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePools(Construct Scope, string Id, DataOciContainerengineNodePoolsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig">DataOciContainerengineNodePoolsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig">DataOciContainerengineNodePoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetClusterId` <a name="ResetClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineNodePools resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineNodePools.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineNodePools.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineNodePools.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineNodePools.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciContainerengineNodePools resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerengineNodePools to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerengineNodePools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineNodePools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList">DataOciContainerengineNodePoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nodePools">NodePools</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList">DataOciContainerengineNodePoolsNodePoolsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.stateInput">StateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.state">State</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filter"></a>

```csharp
public DataOciContainerengineNodePoolsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList">DataOciContainerengineNodePoolsFilterList</a>

---

##### `NodePools`<sup>Required</sup> <a name="NodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nodePools"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsList NodePools { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList">DataOciContainerengineNodePoolsNodePoolsList</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.stateInput"></a>

```csharp
public string[] StateInput { get; }
```

- *Type:* string[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.state"></a>

```csharp
public string[] State { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineNodePoolsConfig <a name="DataOciContainerengineNodePoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ClusterId = null,
    object Filter = null,
    string Id = null,
    string Name = null,
    string[] State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.state">State</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#filter DataOciContainerengineNodePools#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.state"></a>

```csharp
public string[] State { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}.

---

### DataOciContainerengineNodePoolsFilter <a name="DataOciContainerengineNodePoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#values DataOciContainerengineNodePools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#regex DataOciContainerengineNodePools#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#values DataOciContainerengineNodePools#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#regex DataOciContainerengineNodePools#regex}.

---

### DataOciContainerengineNodePoolsNodePools <a name="DataOciContainerengineNodePoolsNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePools {

};
```


### DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels <a name="DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings <a name="DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodes <a name="DataOciContainerengineNodePoolsNodePoolsNodes" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodes {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodesError <a name="DataOciContainerengineNodePoolsNodePoolsNodesError" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodesError {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig <a name="DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodeSource <a name="DataOciContainerengineNodePoolsNodePoolsNodeSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeSource {

};
```


### DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineNodePoolsFilterList <a name="DataOciContainerengineNodePoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.get"></a>

```csharp
private DataOciContainerengineNodePoolsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciContainerengineNodePoolsFilterOutputReference <a name="DataOciContainerengineNodePoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList <a name="DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels</a>

---


### DataOciContainerengineNodePoolsNodePoolsList <a name="DataOciContainerengineNodePoolsNodePoolsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType">CniType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds">PodNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds">PodSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CniType`<sup>Required</sup> <a name="CniType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType"></a>

```csharp
public string CniType { get; }
```

- *Type:* string

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; }
```

- *Type:* double

---

##### `PodNsgIds`<sup>Required</sup> <a name="PodNsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds"></a>

```csharp
public string[] PodNsgIds { get; }
```

- *Type:* string[]

---

##### `PodSubnetIds`<sup>Required</sup> <a name="PodSubnetIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds"></a>

```csharp
public string[] PodSubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails">NodePoolPodNetworkOptionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.placementConfigs">PlacementConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```csharp
public IResolvable IsPvEncryptionInTransitEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `NodePoolPodNetworkOptionDetails`<sup>Required</sup> <a name="NodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList NodePoolPodNetworkOptionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList</a>

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PlacementConfigs`<sup>Required</sup> <a name="PlacementConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.placementConfigs"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList PlacementConfigs { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList</a>

---

##### `Size`<sup>Required</sup> <a name="Size" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains">FaultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig">PreemptibleNodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains"></a>

```csharp
public string[] FaultDomains { get; }
```

- *Type:* string[]

---

##### `PreemptibleNodeConfig`<sup>Required</sup> <a name="PreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList PreemptibleNodeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction">PreemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreemptionAction`<sup>Required</sup> <a name="PreemptionAction" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList PreemptionAction { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume">IsPreserveBootVolume</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsPreserveBootVolume`<sup>Required</sup> <a name="IsPreserveBootVolume" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume"></a>

```csharp
public IResolvable IsPreserveBootVolume { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration">EvictionGraceDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration">IsForceDeleteAfterGraceDuration</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvictionGraceDuration`<sup>Required</sup> <a name="EvictionGraceDuration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration"></a>

```csharp
public string EvictionGraceDuration { get; }
```

- *Type:* string

---

##### `IsForceDeleteAfterGraceDuration`<sup>Required</sup> <a name="IsForceDeleteAfterGraceDuration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration"></a>

```csharp
public IResolvable IsForceDeleteAfterGraceDuration { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled">IsNodeCyclingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumSurge">MaximumSurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumUnavailable">MaximumUnavailable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsNodeCyclingEnabled`<sup>Required</sup> <a name="IsNodeCyclingEnabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled"></a>

```csharp
public IResolvable IsNodeCyclingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaximumSurge`<sup>Required</sup> <a name="MaximumSurge" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumSurge"></a>

```csharp
public string MaximumSurge { get; }
```

- *Type:* string

---

##### `MaximumUnavailable`<sup>Required</sup> <a name="MaximumUnavailable" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumUnavailable"></a>

```csharp
public string MaximumUnavailable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodesErrorList <a name="DataOciContainerengineNodePoolsNodePoolsNodesErrorList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodesErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError">DataOciContainerengineNodePoolsNodePoolsNodesError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodesError InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError">DataOciContainerengineNodePoolsNodePoolsNodesError</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList <a name="DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodesList <a name="DataOciContainerengineNodePoolsNodePoolsNodesList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs">BootVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootVolumeSizeInGbs`<sup>Required</sup> <a name="BootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```csharp
public string BootVolumeSizeInGbs { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceList <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.get"></a>

```csharp
private DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource">DataOciContainerengineNodePoolsNodePoolsNodeSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeSource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource">DataOciContainerengineNodePoolsNodePoolsNodeSource</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodesOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.error">Error</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList">DataOciContainerengineNodePoolsNodePoolsNodesErrorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.nodePoolId">NodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.publicIp">PublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes">DataOciContainerengineNodePoolsNodePoolsNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.error"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodesErrorList Error { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList">DataOciContainerengineNodePoolsNodePoolsNodesErrorList</a>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.nodePoolId"></a>

```csharp
public string NodePoolId { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.publicIp"></a>

```csharp
public string PublicIp { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes">DataOciContainerengineNodePoolsNodePoolsNodes</a>

---


### DataOciContainerengineNodePoolsNodePoolsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineNodePoolsNodePoolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.initialNodeLabels">InitialNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeConfigDetails">NodeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeEvictionNodePoolSettings">NodeEvictionNodePoolSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageId">NodeImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageName">NodeImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeMetadata">NodeMetadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolCyclingDetails">NodePoolCyclingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolId">NodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodes">Nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList">DataOciContainerengineNodePoolsNodePoolsNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShape">NodeShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShapeConfig">NodeShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSource">NodeSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList">DataOciContainerengineNodePoolsNodePoolsNodeSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSourceDetails">NodeSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.quantityPerSubnet">QuantityPerSubnet</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.sshPublicKey">SshPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools">DataOciContainerengineNodePoolsNodePools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialNodeLabels`<sup>Required</sup> <a name="InitialNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.initialNodeLabels"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList InitialNodeLabels { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList</a>

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeConfigDetails`<sup>Required</sup> <a name="NodeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeConfigDetails"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList NodeConfigDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList</a>

---

##### `NodeEvictionNodePoolSettings`<sup>Required</sup> <a name="NodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeEvictionNodePoolSettings"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList NodeEvictionNodePoolSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList</a>

---

##### `NodeImageId`<sup>Required</sup> <a name="NodeImageId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageId"></a>

```csharp
public string NodeImageId { get; }
```

- *Type:* string

---

##### `NodeImageName`<sup>Required</sup> <a name="NodeImageName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageName"></a>

```csharp
public string NodeImageName { get; }
```

- *Type:* string

---

##### `NodeMetadata`<sup>Required</sup> <a name="NodeMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeMetadata"></a>

```csharp
public StringMap NodeMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `NodePoolCyclingDetails`<sup>Required</sup> <a name="NodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolCyclingDetails"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList NodePoolCyclingDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList</a>

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolId"></a>

```csharp
public string NodePoolId { get; }
```

- *Type:* string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodes"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodesList Nodes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList">DataOciContainerengineNodePoolsNodePoolsNodesList</a>

---

##### `NodeShape`<sup>Required</sup> <a name="NodeShape" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShape"></a>

```csharp
public string NodeShape { get; }
```

- *Type:* string

---

##### `NodeShapeConfig`<sup>Required</sup> <a name="NodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShapeConfig"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList NodeShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList</a>

---

##### `NodeSource`<sup>Required</sup> <a name="NodeSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSource"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeSourceList NodeSource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList">DataOciContainerengineNodePoolsNodePoolsNodeSourceList</a>

---

##### `NodeSourceDetails`<sup>Required</sup> <a name="NodeSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSourceDetails"></a>

```csharp
public DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList NodeSourceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList</a>

---

##### `QuantityPerSubnet`<sup>Required</sup> <a name="QuantityPerSubnet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.quantityPerSubnet"></a>

```csharp
public double QuantityPerSubnet { get; }
```

- *Type:* double

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.sshPublicKey"></a>

```csharp
public string SshPublicKey { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineNodePoolsNodePools InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools">DataOciContainerengineNodePoolsNodePools</a>

---



