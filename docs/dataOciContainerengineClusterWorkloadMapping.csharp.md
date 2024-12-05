# `dataOciContainerengineClusterWorkloadMapping` Submodule <a name="`dataOciContainerengineClusterWorkloadMapping` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineClusterWorkloadMapping <a name="DataOciContainerengineClusterWorkloadMapping" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping oci_containerengine_cluster_workload_mapping}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineClusterWorkloadMapping(Construct Scope, string Id, DataOciContainerengineClusterWorkloadMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig">DataOciContainerengineClusterWorkloadMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig">DataOciContainerengineClusterWorkloadMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineClusterWorkloadMapping resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineClusterWorkloadMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineClusterWorkloadMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineClusterWorkloadMapping.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineClusterWorkloadMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciContainerengineClusterWorkloadMapping resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerengineClusterWorkloadMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerengineClusterWorkloadMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineClusterWorkloadMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.mappedCompartmentId">MappedCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.mappedTenancyId">MappedTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.workloadMappingIdInput">WorkloadMappingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.workloadMappingId">WorkloadMappingId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MappedCompartmentId`<sup>Required</sup> <a name="MappedCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.mappedCompartmentId"></a>

```csharp
public string MappedCompartmentId { get; }
```

- *Type:* string

---

##### `MappedTenancyId`<sup>Required</sup> <a name="MappedTenancyId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.mappedTenancyId"></a>

```csharp
public string MappedTenancyId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `WorkloadMappingIdInput`<sup>Optional</sup> <a name="WorkloadMappingIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.workloadMappingIdInput"></a>

```csharp
public string WorkloadMappingIdInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `WorkloadMappingId`<sup>Required</sup> <a name="WorkloadMappingId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.workloadMappingId"></a>

```csharp
public string WorkloadMappingId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineClusterWorkloadMappingConfig <a name="DataOciContainerengineClusterWorkloadMappingConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineClusterWorkloadMappingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string WorkloadMappingId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping#cluster_id DataOciContainerengineClusterWorkloadMapping#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.workloadMappingId">WorkloadMappingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping#workload_mapping_id DataOciContainerengineClusterWorkloadMapping#workload_mapping_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping#cluster_id DataOciContainerengineClusterWorkloadMapping#cluster_id}.

---

##### `WorkloadMappingId`<sup>Required</sup> <a name="WorkloadMappingId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterWorkloadMapping.DataOciContainerengineClusterWorkloadMappingConfig.property.workloadMappingId"></a>

```csharp
public string WorkloadMappingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_workload_mapping#workload_mapping_id DataOciContainerengineClusterWorkloadMapping#workload_mapping_id}.

---


