# `dataOciDevopsBuildPipelineStages` Submodule <a name="`dataOciDevopsBuildPipelineStages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsBuildPipelineStages <a name="DataOciDevopsBuildPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages oci_devops_build_pipeline_stages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStages(Construct Scope, string Id, DataOciDevopsBuildPipelineStagesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig">DataOciDevopsBuildPipelineStagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig">DataOciDevopsBuildPipelineStagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetBuildPipelineId">ResetBuildPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetBuildPipelineId` <a name="ResetBuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetBuildPipelineId"></a>

```csharp
private void ResetBuildPipelineId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsBuildPipelineStages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsBuildPipelineStages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsBuildPipelineStages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsBuildPipelineStages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsBuildPipelineStages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDevopsBuildPipelineStages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsBuildPipelineStages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsBuildPipelineStages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsBuildPipelineStages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineStageCollection">BuildPipelineStageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList">DataOciDevopsBuildPipelineStagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineIdInput">BuildPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineId">BuildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BuildPipelineStageCollection`<sup>Required</sup> <a name="BuildPipelineStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineStageCollection"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList BuildPipelineStageCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.filter"></a>

```csharp
public DataOciDevopsBuildPipelineStagesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList">DataOciDevopsBuildPipelineStagesFilterList</a>

---

##### `BuildPipelineIdInput`<sup>Optional</sup> <a name="BuildPipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineIdInput"></a>

```csharp
public string BuildPipelineIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineId"></a>

```csharp
public string BuildPipelineId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig {

};
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria {

};
```


### DataOciDevopsBuildPipelineStagesConfig <a name="DataOciDevopsBuildPipelineStagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BuildPipelineId = null,
    string CompartmentId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.buildPipelineId">BuildPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#build_pipeline_id DataOciDevopsBuildPipelineStages#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#compartment_id DataOciDevopsBuildPipelineStages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#display_name DataOciDevopsBuildPipelineStages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#id DataOciDevopsBuildPipelineStages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#state DataOciDevopsBuildPipelineStages#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BuildPipelineId`<sup>Optional</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.buildPipelineId"></a>

```csharp
public string BuildPipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#build_pipeline_id DataOciDevopsBuildPipelineStages#build_pipeline_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#compartment_id DataOciDevopsBuildPipelineStages#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#display_name DataOciDevopsBuildPipelineStages#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#filter DataOciDevopsBuildPipelineStages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#id DataOciDevopsBuildPipelineStages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#state DataOciDevopsBuildPipelineStages#state}.

---

### DataOciDevopsBuildPipelineStagesFilter <a name="DataOciDevopsBuildPipelineStagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#name DataOciDevopsBuildPipelineStages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#values DataOciDevopsBuildPipelineStages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#regex DataOciDevopsBuildPipelineStages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#name DataOciDevopsBuildPipelineStages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#values DataOciDevopsBuildPipelineStages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#regex DataOciDevopsBuildPipelineStages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.items"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.buildRunnerType">BuildRunnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildRunnerType`<sup>Required</sup> <a name="BuildRunnerType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.buildRunnerType"></a>

```csharp
public string BuildRunnerType { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.items"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.artifactName">ArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `ArtifactName`<sup>Required</sup> <a name="ArtifactName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.artifactName"></a>

```csharp
public string ArtifactName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.items"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineId">BuildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineStagePredecessorCollection">BuildPipelineStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineStageType">BuildPipelineStageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildRunnerShapeConfig">BuildRunnerShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildSourceCollection">BuildSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildSpecFile">BuildSpecFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.deliverArtifactCollection">DeliverArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.deployPipelineId">DeployPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.isPassAllParametersEnabled">IsPassAllParametersEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.primaryBuildSource">PrimaryBuildSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.privateAccessConfig">PrivateAccessConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.stageExecutionTimeoutInSeconds">StageExecutionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineId"></a>

```csharp
public string BuildPipelineId { get; }
```

- *Type:* string

---

##### `BuildPipelineStagePredecessorCollection`<sup>Required</sup> <a name="BuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineStagePredecessorCollection"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList BuildPipelineStagePredecessorCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList</a>

---

##### `BuildPipelineStageType`<sup>Required</sup> <a name="BuildPipelineStageType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineStageType"></a>

```csharp
public string BuildPipelineStageType { get; }
```

- *Type:* string

---

##### `BuildRunnerShapeConfig`<sup>Required</sup> <a name="BuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildRunnerShapeConfig"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList BuildRunnerShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList</a>

---

##### `BuildSourceCollection`<sup>Required</sup> <a name="BuildSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildSourceCollection"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList BuildSourceCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList</a>

---

##### `BuildSpecFile`<sup>Required</sup> <a name="BuildSpecFile" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildSpecFile"></a>

```csharp
public string BuildSpecFile { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeliverArtifactCollection`<sup>Required</sup> <a name="DeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.deliverArtifactCollection"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList DeliverArtifactCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList</a>

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.deployPipelineId"></a>

```csharp
public string DeployPipelineId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `IsPassAllParametersEnabled`<sup>Required</sup> <a name="IsPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.isPassAllParametersEnabled"></a>

```csharp
public IResolvable IsPassAllParametersEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PrimaryBuildSource`<sup>Required</sup> <a name="PrimaryBuildSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.primaryBuildSource"></a>

```csharp
public string PrimaryBuildSource { get; }
```

- *Type:* string

---

##### `PrivateAccessConfig`<sup>Required</sup> <a name="PrivateAccessConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.privateAccessConfig"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList PrivateAccessConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `StageExecutionTimeoutInSeconds`<sup>Required</sup> <a name="StageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.stageExecutionTimeoutInSeconds"></a>

```csharp
public double StageExecutionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `WaitCriteria`<sup>Required</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.waitCriteria"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList WaitCriteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.networkChannelType"></a>

```csharp
public string NetworkChannelType { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration">WaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.waitType">WaitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration"></a>

```csharp
public string WaitDuration { get; }
```

- *Type:* string

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.waitType"></a>

```csharp
public string WaitType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.items"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection</a>

---


### DataOciDevopsBuildPipelineStagesFilterList <a name="DataOciDevopsBuildPipelineStagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.get"></a>

```csharp
private DataOciDevopsBuildPipelineStagesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDevopsBuildPipelineStagesFilterOutputReference <a name="DataOciDevopsBuildPipelineStagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsBuildPipelineStagesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



