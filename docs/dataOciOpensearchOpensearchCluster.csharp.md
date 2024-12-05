# `dataOciOpensearchOpensearchCluster` Submodule <a name="`dataOciOpensearchOpensearchCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpensearchOpensearchCluster <a name="DataOciOpensearchOpensearchCluster" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpensearchOpensearchCluster(Construct Scope, string Id, DataOciOpensearchOpensearchClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig">DataOciOpensearchOpensearchClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig">DataOciOpensearchOpensearchClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpensearchOpensearchCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpensearchOpensearchCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpensearchOpensearchCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOpensearchOpensearchCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpensearchOpensearchCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpensearchOpensearchCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpensearchOpensearchCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.availabilityDomains">AvailabilityDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeCount">DataNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostBareMetalShape">DataNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostMemoryGb">DataNodeHostMemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostOcpuCount">DataNodeHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostType">DataNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeStorageGb">DataNodeStorageGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeCount">MasterNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostBareMetalShape">MasterNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostMemoryGb">MasterNodeHostMemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostOcpuCount">MasterNodeHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostType">MasterNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardFqdn">OpendashboardFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeCount">OpendashboardNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb">OpendashboardNodeHostMemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount">OpendashboardNodeHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardPrivateIp">OpendashboardPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchFqdn">OpensearchFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchPrivateIp">OpensearchPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserName">SecurityMasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserPasswordHash">SecurityMasterUserPasswordHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMode">SecurityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.softwareVersion">SoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetCompartmentId">SubnetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeDeleted">TimeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.totalStorageGb">TotalStorageGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnCompartmentId">VcnCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterIdInput">OpensearchClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterId">OpensearchClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailabilityDomains`<sup>Required</sup> <a name="AvailabilityDomains" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.availabilityDomains"></a>

```csharp
public string[] AvailabilityDomains { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DataNodeCount`<sup>Required</sup> <a name="DataNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeCount"></a>

```csharp
public double DataNodeCount { get; }
```

- *Type:* double

---

##### `DataNodeHostBareMetalShape`<sup>Required</sup> <a name="DataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostBareMetalShape"></a>

```csharp
public string DataNodeHostBareMetalShape { get; }
```

- *Type:* string

---

##### `DataNodeHostMemoryGb`<sup>Required</sup> <a name="DataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostMemoryGb"></a>

```csharp
public double DataNodeHostMemoryGb { get; }
```

- *Type:* double

---

##### `DataNodeHostOcpuCount`<sup>Required</sup> <a name="DataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostOcpuCount"></a>

```csharp
public double DataNodeHostOcpuCount { get; }
```

- *Type:* double

---

##### `DataNodeHostType`<sup>Required</sup> <a name="DataNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostType"></a>

```csharp
public string DataNodeHostType { get; }
```

- *Type:* string

---

##### `DataNodeStorageGb`<sup>Required</sup> <a name="DataNodeStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeStorageGb"></a>

```csharp
public double DataNodeStorageGb { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MasterNodeCount`<sup>Required</sup> <a name="MasterNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeCount"></a>

```csharp
public double MasterNodeCount { get; }
```

- *Type:* double

---

##### `MasterNodeHostBareMetalShape`<sup>Required</sup> <a name="MasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostBareMetalShape"></a>

```csharp
public string MasterNodeHostBareMetalShape { get; }
```

- *Type:* string

---

##### `MasterNodeHostMemoryGb`<sup>Required</sup> <a name="MasterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostMemoryGb"></a>

```csharp
public double MasterNodeHostMemoryGb { get; }
```

- *Type:* double

---

##### `MasterNodeHostOcpuCount`<sup>Required</sup> <a name="MasterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostOcpuCount"></a>

```csharp
public double MasterNodeHostOcpuCount { get; }
```

- *Type:* double

---

##### `MasterNodeHostType`<sup>Required</sup> <a name="MasterNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostType"></a>

```csharp
public string MasterNodeHostType { get; }
```

- *Type:* string

---

##### `OpendashboardFqdn`<sup>Required</sup> <a name="OpendashboardFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardFqdn"></a>

```csharp
public string OpendashboardFqdn { get; }
```

- *Type:* string

---

##### `OpendashboardNodeCount`<sup>Required</sup> <a name="OpendashboardNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeCount"></a>

```csharp
public double OpendashboardNodeCount { get; }
```

- *Type:* double

---

##### `OpendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="OpendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb"></a>

```csharp
public double OpendashboardNodeHostMemoryGb { get; }
```

- *Type:* double

---

##### `OpendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="OpendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount"></a>

```csharp
public double OpendashboardNodeHostOcpuCount { get; }
```

- *Type:* double

---

##### `OpendashboardPrivateIp`<sup>Required</sup> <a name="OpendashboardPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardPrivateIp"></a>

```csharp
public string OpendashboardPrivateIp { get; }
```

- *Type:* string

---

##### `OpensearchFqdn`<sup>Required</sup> <a name="OpensearchFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchFqdn"></a>

```csharp
public string OpensearchFqdn { get; }
```

- *Type:* string

---

##### `OpensearchPrivateIp`<sup>Required</sup> <a name="OpensearchPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchPrivateIp"></a>

```csharp
public string OpensearchPrivateIp { get; }
```

- *Type:* string

---

##### `SecurityMasterUserName`<sup>Required</sup> <a name="SecurityMasterUserName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserName"></a>

```csharp
public string SecurityMasterUserName { get; }
```

- *Type:* string

---

##### `SecurityMasterUserPasswordHash`<sup>Required</sup> <a name="SecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserPasswordHash"></a>

```csharp
public string SecurityMasterUserPasswordHash { get; }
```

- *Type:* string

---

##### `SecurityMode`<sup>Required</sup> <a name="SecurityMode" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMode"></a>

```csharp
public string SecurityMode { get; }
```

- *Type:* string

---

##### `SoftwareVersion`<sup>Required</sup> <a name="SoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.softwareVersion"></a>

```csharp
public string SoftwareVersion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetCompartmentId`<sup>Required</sup> <a name="SubnetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetCompartmentId"></a>

```csharp
public string SubnetCompartmentId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDeleted`<sup>Required</sup> <a name="TimeDeleted" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeDeleted"></a>

```csharp
public string TimeDeleted { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalStorageGb`<sup>Required</sup> <a name="TotalStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.totalStorageGb"></a>

```csharp
public double TotalStorageGb { get; }
```

- *Type:* double

---

##### `VcnCompartmentId`<sup>Required</sup> <a name="VcnCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnCompartmentId"></a>

```csharp
public string VcnCompartmentId { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `OpensearchClusterIdInput`<sup>Optional</sup> <a name="OpensearchClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterIdInput"></a>

```csharp
public string OpensearchClusterIdInput { get; }
```

- *Type:* string

---

##### `OpensearchClusterId`<sup>Required</sup> <a name="OpensearchClusterId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterId"></a>

```csharp
public string OpensearchClusterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpensearchOpensearchClusterConfig <a name="DataOciOpensearchOpensearchClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOpensearchOpensearchClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OpensearchClusterId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.opensearchClusterId">OpensearchClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OpensearchClusterId`<sup>Required</sup> <a name="OpensearchClusterId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.opensearchClusterId"></a>

```csharp
public string OpensearchClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}.

---



