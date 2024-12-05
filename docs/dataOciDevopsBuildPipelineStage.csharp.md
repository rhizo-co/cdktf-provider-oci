# `dataOciDevopsBuildPipelineStage` Submodule <a name="`dataOciDevopsBuildPipelineStage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsBuildPipelineStage <a name="DataOciDevopsBuildPipelineStage" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stage oci_devops_build_pipeline_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStage(Construct Scope, string Id, DataOciDevopsBuildPipelineStageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig">DataOciDevopsBuildPipelineStageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig">DataOciDevopsBuildPipelineStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsBuildPipelineStage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsBuildPipelineStage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsBuildPipelineStage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsBuildPipelineStage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsBuildPipelineStage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsBuildPipelineStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsBuildPipelineStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineId">BuildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection">BuildPipelineStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageType">BuildPipelineStageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildRunnerShapeConfig">BuildRunnerShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList">DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildSourceCollection">BuildSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList">DataOciDevopsBuildPipelineStageBuildSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildSpecFile">BuildSpecFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.deliverArtifactCollection">DeliverArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.deployPipelineId">DeployPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.isPassAllParametersEnabled">IsPassAllParametersEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.primaryBuildSource">PrimaryBuildSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.privateAccessConfig">PrivateAccessConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList">DataOciDevopsBuildPipelineStagePrivateAccessConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds">StageExecutionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList">DataOciDevopsBuildPipelineStageWaitCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageIdInput">BuildPipelineStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageId">BuildPipelineStageId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineId"></a>

```csharp
public string BuildPipelineId { get; }
```

- *Type:* string

---

##### `BuildPipelineStagePredecessorCollection`<sup>Required</sup> <a name="BuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList BuildPipelineStagePredecessorCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList</a>

---

##### `BuildPipelineStageType`<sup>Required</sup> <a name="BuildPipelineStageType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageType"></a>

```csharp
public string BuildPipelineStageType { get; }
```

- *Type:* string

---

##### `BuildRunnerShapeConfig`<sup>Required</sup> <a name="BuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildRunnerShapeConfig"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList BuildRunnerShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList">DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList</a>

---

##### `BuildSourceCollection`<sup>Required</sup> <a name="BuildSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildSourceCollection"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildSourceCollectionList BuildSourceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList">DataOciDevopsBuildPipelineStageBuildSourceCollectionList</a>

---

##### `BuildSpecFile`<sup>Required</sup> <a name="BuildSpecFile" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildSpecFile"></a>

```csharp
public string BuildSpecFile { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeliverArtifactCollection`<sup>Required</sup> <a name="DeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.deliverArtifactCollection"></a>

```csharp
public DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList DeliverArtifactCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList</a>

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.deployPipelineId"></a>

```csharp
public string DeployPipelineId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `IsPassAllParametersEnabled`<sup>Required</sup> <a name="IsPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.isPassAllParametersEnabled"></a>

```csharp
public IResolvable IsPassAllParametersEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PrimaryBuildSource`<sup>Required</sup> <a name="PrimaryBuildSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.primaryBuildSource"></a>

```csharp
public string PrimaryBuildSource { get; }
```

- *Type:* string

---

##### `PrivateAccessConfig`<sup>Required</sup> <a name="PrivateAccessConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.privateAccessConfig"></a>

```csharp
public DataOciDevopsBuildPipelineStagePrivateAccessConfigList PrivateAccessConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList">DataOciDevopsBuildPipelineStagePrivateAccessConfigList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `StageExecutionTimeoutInSeconds`<sup>Required</sup> <a name="StageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds"></a>

```csharp
public double StageExecutionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `WaitCriteria`<sup>Required</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.waitCriteria"></a>

```csharp
public DataOciDevopsBuildPipelineStageWaitCriteriaList WaitCriteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList">DataOciDevopsBuildPipelineStageWaitCriteriaList</a>

---

##### `BuildPipelineStageIdInput`<sup>Optional</sup> <a name="BuildPipelineStageIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageIdInput"></a>

```csharp
public string BuildPipelineStageIdInput { get; }
```

- *Type:* string

---

##### `BuildPipelineStageId`<sup>Required</sup> <a name="BuildPipelineStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageId"></a>

```csharp
public string BuildPipelineStageId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection {

};
```


### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems {

};
```


### DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig <a name="DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig {

};
```


### DataOciDevopsBuildPipelineStageBuildSourceCollection <a name="DataOciDevopsBuildPipelineStageBuildSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildSourceCollection {

};
```


### DataOciDevopsBuildPipelineStageBuildSourceCollectionItems <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildSourceCollectionItems {

};
```


### DataOciDevopsBuildPipelineStageConfig <a name="DataOciDevopsBuildPipelineStageConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BuildPipelineStageId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.buildPipelineStageId">BuildPipelineStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stage#build_pipeline_stage_id DataOciDevopsBuildPipelineStage#build_pipeline_stage_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BuildPipelineStageId`<sup>Required</sup> <a name="BuildPipelineStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.buildPipelineStageId"></a>

```csharp
public string BuildPipelineStageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stage#build_pipeline_stage_id DataOciDevopsBuildPipelineStage#build_pipeline_stage_id}.

---

### DataOciDevopsBuildPipelineStageDeliverArtifactCollection <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageDeliverArtifactCollection {

};
```


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems {

};
```


### DataOciDevopsBuildPipelineStagePrivateAccessConfig <a name="DataOciDevopsBuildPipelineStagePrivateAccessConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagePrivateAccessConfig {

};
```


### DataOciDevopsBuildPipelineStageWaitCriteria <a name="DataOciDevopsBuildPipelineStageWaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageWaitCriteria {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>

---


### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---


### DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList <a name="DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference <a name="DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType">BuildRunnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig">DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildRunnerType`<sup>Required</sup> <a name="BuildRunnerType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType"></a>

```csharp
public string BuildRunnerType { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig">DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---


### DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItems">DataOciDevopsBuildPipelineStageBuildSourceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildSourceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItems">DataOciDevopsBuildPipelineStageBuildSourceCollectionItems</a>

---


### DataOciDevopsBuildPipelineStageBuildSourceCollectionList <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildSourceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList">DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollection">DataOciDevopsBuildPipelineStageBuildSourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList">DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStageBuildSourceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollection">DataOciDevopsBuildPipelineStageBuildSourceCollection</a>

---


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName">ArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `ArtifactName`<sup>Required</sup> <a name="ArtifactName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName"></a>

```csharp
public string ArtifactName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems</a>

---


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollection">DataOciDevopsBuildPipelineStageDeliverArtifactCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items"></a>

```csharp
public DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStageDeliverArtifactCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollection">DataOciDevopsBuildPipelineStageDeliverArtifactCollection</a>

---


### DataOciDevopsBuildPipelineStagePrivateAccessConfigList <a name="DataOciDevopsBuildPipelineStagePrivateAccessConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagePrivateAccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference <a name="DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfig">DataOciDevopsBuildPipelineStagePrivateAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType"></a>

```csharp
public string NetworkChannelType { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagePrivateAccessConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfig">DataOciDevopsBuildPipelineStagePrivateAccessConfig</a>

---


### DataOciDevopsBuildPipelineStageWaitCriteriaList <a name="DataOciDevopsBuildPipelineStageWaitCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageWaitCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference <a name="DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration">WaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType">WaitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteria">DataOciDevopsBuildPipelineStageWaitCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration"></a>

```csharp
public string WaitDuration { get; }
```

- *Type:* string

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType"></a>

```csharp
public string WaitType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStageWaitCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteria">DataOciDevopsBuildPipelineStageWaitCriteria</a>

---



