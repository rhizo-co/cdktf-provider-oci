# `dataOciDevopsDeployStages` Submodule <a name="`dataOciDevopsDeployStages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployStages <a name="DataOciDevopsDeployStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages oci_devops_deploy_stages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStages(Construct Scope, string Id, DataOciDevopsDeployStagesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig">DataOciDevopsDeployStagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig">DataOciDevopsDeployStagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDeployPipelineId">ResetDeployPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDeployPipelineId` <a name="ResetDeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDeployPipelineId"></a>

```csharp
private void ResetDeployPipelineId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployStages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsDeployStages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsDeployStages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsDeployStages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDevopsDeployStages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDevopsDeployStages resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsDeployStages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsDeployStages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployStages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployStageCollection">DeployStageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList">DataOciDevopsDeployStagesDeployStageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList">DataOciDevopsDeployStagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineIdInput">DeployPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineId">DeployPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DeployStageCollection`<sup>Required</sup> <a name="DeployStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployStageCollection"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionList DeployStageCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList">DataOciDevopsDeployStagesDeployStageCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filter"></a>

```csharp
public DataOciDevopsDeployStagesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList">DataOciDevopsDeployStagesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DeployPipelineIdInput`<sup>Optional</sup> <a name="DeployPipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineIdInput"></a>

```csharp
public string DeployPipelineIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineId"></a>

```csharp
public string DeployPipelineId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployStagesConfig <a name="DataOciDevopsDeployStagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string DeployPipelineId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.deployPipelineId">DeployPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}.

---

##### `DeployPipelineId`<sup>Optional</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.deployPipelineId"></a>

```csharp
public string DeployPipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#filter DataOciDevopsDeployStages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}.

---

### DataOciDevopsDeployStagesDeployStageCollection <a name="DataOciDevopsDeployStagesDeployStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollection {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItems {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetString <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetString {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig {

};
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria {

};
```


### DataOciDevopsDeployStagesFilter <a name="DataOciDevopsDeployStagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#name DataOciDevopsDeployStages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#values DataOciDevopsDeployStages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#regex DataOciDevopsDeployStages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#name DataOciDevopsDeployStages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#values DataOciDevopsDeployStages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#regex DataOciDevopsDeployStages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.approvalPolicyType">ApprovalPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.numberOfApprovalsRequired">NumberOfApprovalsRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalPolicyType`<sup>Required</sup> <a name="ApprovalPolicyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.approvalPolicyType"></a>

```csharp
public string ApprovalPolicyType { get; }
```

- *Type:* string

---

##### `NumberOfApprovalsRequired`<sup>Required</sup> <a name="NumberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.numberOfApprovalsRequired"></a>

```csharp
public double NumberOfApprovalsRequired { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.ingressName">IngressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceA">NamespaceA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceB">NamespaceB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.ingressName"></a>

```csharp
public string IngressName { get; }
```

- *Type:* string

---

##### `NamespaceA`<sup>Required</sup> <a name="NamespaceA" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceA"></a>

```csharp
public string NamespaceA { get; }
```

- *Type:* string

---

##### `NamespaceB`<sup>Required</sup> <a name="NamespaceB" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceB"></a>

```csharp
public string NamespaceB { get; }
```

- *Type:* string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.strategyType"></a>

```csharp
public string StrategyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.ingressName">IngressName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.ingressName"></a>

```csharp
public string IngressName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.strategyType"></a>

```csharp
public string StrategyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.networkChannelType"></a>

```csharp
public string NetworkChannelType { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.containerConfigType">ContainerConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContainerConfigType`<sup>Required</sup> <a name="ContainerConfigType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.containerConfigType"></a>

```csharp
public string ContainerConfigType { get; }
```

- *Type:* string

---

##### `NetworkChannel`<sup>Required</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.networkChannel"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList NetworkChannel { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList</a>

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeConfig"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.items"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failureCount">FailureCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failurePercentage">FailurePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureCount`<sup>Required</sup> <a name="FailureCount" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failureCount"></a>

```csharp
public double FailureCount { get; }
```

- *Type:* double

---

##### `FailurePercentage`<sup>Required</sup> <a name="FailurePercentage" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failurePercentage"></a>

```csharp
public double FailurePercentage { get; }
```

- *Type:* double

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.listenerName"></a>

```csharp
public string ListenerName { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.approvalPolicy">ApprovalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.areHooksEnabled">AreHooksEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueBackendIps">BlueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueGreenStrategy">BlueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.canaryStrategy">CanaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.commandSpecDeployArtifactId">CommandSpecDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">ComputeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryDeployStageId">ComputeInstanceGroupCanaryDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">ComputeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupDeployEnvironmentId">ComputeInstanceGroupDeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.config">Config</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.containerConfig">ContainerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactId">DeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactIds">DeployArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdA">DeployEnvironmentIdA</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdB">DeployEnvironmentIdB</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deploymentSpecDeployArtifactId">DeploymentSpecDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployPipelineId">DeployPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStagePredecessorCollection">DeployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStageType">DeployStageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.dockerImageDeployArtifactId">DockerImageDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionDeployEnvironmentId">FunctionDeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionTimeoutInSeconds">FunctionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.greenBackendIps">GreenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmChartDeployArtifactId">HelmChartDeployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmCommandArtifactIds">HelmCommandArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isAsync">IsAsync</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isDebugEnabled">IsDebugEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isForceEnabled">IsForceEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isUninstallOnStageDelete">IsUninstallOnStageDelete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isValidationEnabled">IsValidationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.kubernetesManifestDeployArtifactIds">KubernetesManifestDeployArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.loadBalancerConfig">LoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxHistory">MaxHistory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxMemoryInMbs">MaxMemoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeBlueGreenDeployStageId">OkeBlueGreenDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryDeployStageId">OkeCanaryDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryTrafficShiftDeployStageId">OkeCanaryTrafficShiftDeployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeClusterDeployEnvironmentId">OkeClusterDeployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.productionLoadBalancerConfig">ProductionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.releaseName">ReleaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rollbackPolicy">RollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setString">SetString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setValues">SetValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldCleanupOnFail">ShouldCleanupOnFail</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldNotWait">ShouldNotWait</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldResetValues">ShouldResetValues</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldReuseValues">ShouldReuseValues</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipCrds">ShouldSkipCrds</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipRenderSubchartNotes">ShouldSkipRenderSubchartNotes</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.testLoadBalancerConfig">TestLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.trafficShiftTarget">TrafficShiftTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.valuesArtifactIds">ValuesArtifactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalPolicy`<sup>Required</sup> <a name="ApprovalPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.approvalPolicy"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList ApprovalPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList</a>

---

##### `AreHooksEnabled`<sup>Required</sup> <a name="AreHooksEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.areHooksEnabled"></a>

```csharp
public IResolvable AreHooksEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BlueBackendIps`<sup>Required</sup> <a name="BlueBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueBackendIps"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList BlueBackendIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList</a>

---

##### `BlueGreenStrategy`<sup>Required</sup> <a name="BlueGreenStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueGreenStrategy"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList BlueGreenStrategy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList</a>

---

##### `CanaryStrategy`<sup>Required</sup> <a name="CanaryStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.canaryStrategy"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList CanaryStrategy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList</a>

---

##### `CommandSpecDeployArtifactId`<sup>Required</sup> <a name="CommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.commandSpecDeployArtifactId"></a>

```csharp
public string CommandSpecDeployArtifactId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```csharp
public string ComputeInstanceGroupBlueGreenDeploymentDeployStageId { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupCanaryDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryDeployStageId"></a>

```csharp
public string ComputeInstanceGroupCanaryDeployStageId { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```csharp
public string ComputeInstanceGroupCanaryTrafficShiftDeployStageId { get; }
```

- *Type:* string

---

##### `ComputeInstanceGroupDeployEnvironmentId`<sup>Required</sup> <a name="ComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupDeployEnvironmentId"></a>

```csharp
public string ComputeInstanceGroupDeployEnvironmentId { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.config"></a>

```csharp
public StringMap Config { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ContainerConfig`<sup>Required</sup> <a name="ContainerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.containerConfig"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList ContainerConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DeployArtifactId`<sup>Required</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactId"></a>

```csharp
public string DeployArtifactId { get; }
```

- *Type:* string

---

##### `DeployArtifactIds`<sup>Required</sup> <a name="DeployArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactIds"></a>

```csharp
public string[] DeployArtifactIds { get; }
```

- *Type:* string[]

---

##### `DeployEnvironmentIdA`<sup>Required</sup> <a name="DeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdA"></a>

```csharp
public string DeployEnvironmentIdA { get; }
```

- *Type:* string

---

##### `DeployEnvironmentIdB`<sup>Required</sup> <a name="DeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdB"></a>

```csharp
public string DeployEnvironmentIdB { get; }
```

- *Type:* string

---

##### `DeploymentSpecDeployArtifactId`<sup>Required</sup> <a name="DeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deploymentSpecDeployArtifactId"></a>

```csharp
public string DeploymentSpecDeployArtifactId { get; }
```

- *Type:* string

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployPipelineId"></a>

```csharp
public string DeployPipelineId { get; }
```

- *Type:* string

---

##### `DeployStagePredecessorCollection`<sup>Required</sup> <a name="DeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStagePredecessorCollection"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList DeployStagePredecessorCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList</a>

---

##### `DeployStageType`<sup>Required</sup> <a name="DeployStageType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStageType"></a>

```csharp
public string DeployStageType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DockerImageDeployArtifactId`<sup>Required</sup> <a name="DockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.dockerImageDeployArtifactId"></a>

```csharp
public string DockerImageDeployArtifactId { get; }
```

- *Type:* string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.failurePolicy"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList FailurePolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FunctionDeployEnvironmentId`<sup>Required</sup> <a name="FunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionDeployEnvironmentId"></a>

```csharp
public string FunctionDeployEnvironmentId { get; }
```

- *Type:* string

---

##### `FunctionTimeoutInSeconds`<sup>Required</sup> <a name="FunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionTimeoutInSeconds"></a>

```csharp
public double FunctionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `GreenBackendIps`<sup>Required</sup> <a name="GreenBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.greenBackendIps"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList GreenBackendIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList</a>

---

##### `HelmChartDeployArtifactId`<sup>Required</sup> <a name="HelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmChartDeployArtifactId"></a>

```csharp
public string HelmChartDeployArtifactId { get; }
```

- *Type:* string

---

##### `HelmCommandArtifactIds`<sup>Required</sup> <a name="HelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmCommandArtifactIds"></a>

```csharp
public string[] HelmCommandArtifactIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAsync`<sup>Required</sup> <a name="IsAsync" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isAsync"></a>

```csharp
public IResolvable IsAsync { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDebugEnabled`<sup>Required</sup> <a name="IsDebugEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isDebugEnabled"></a>

```csharp
public IResolvable IsDebugEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsForceEnabled`<sup>Required</sup> <a name="IsForceEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isForceEnabled"></a>

```csharp
public IResolvable IsForceEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsUninstallOnStageDelete`<sup>Required</sup> <a name="IsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isUninstallOnStageDelete"></a>

```csharp
public IResolvable IsUninstallOnStageDelete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsValidationEnabled`<sup>Required</sup> <a name="IsValidationEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isValidationEnabled"></a>

```csharp
public IResolvable IsValidationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KubernetesManifestDeployArtifactIds`<sup>Required</sup> <a name="KubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.kubernetesManifestDeployArtifactIds"></a>

```csharp
public string[] KubernetesManifestDeployArtifactIds { get; }
```

- *Type:* string[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LoadBalancerConfig`<sup>Required</sup> <a name="LoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.loadBalancerConfig"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList LoadBalancerConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList</a>

---

##### `MaxHistory`<sup>Required</sup> <a name="MaxHistory" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxHistory"></a>

```csharp
public double MaxHistory { get; }
```

- *Type:* double

---

##### `MaxMemoryInMbs`<sup>Required</sup> <a name="MaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxMemoryInMbs"></a>

```csharp
public string MaxMemoryInMbs { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OkeBlueGreenDeployStageId`<sup>Required</sup> <a name="OkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeBlueGreenDeployStageId"></a>

```csharp
public string OkeBlueGreenDeployStageId { get; }
```

- *Type:* string

---

##### `OkeCanaryDeployStageId`<sup>Required</sup> <a name="OkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryDeployStageId"></a>

```csharp
public string OkeCanaryDeployStageId { get; }
```

- *Type:* string

---

##### `OkeCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="OkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryTrafficShiftDeployStageId"></a>

```csharp
public string OkeCanaryTrafficShiftDeployStageId { get; }
```

- *Type:* string

---

##### `OkeClusterDeployEnvironmentId`<sup>Required</sup> <a name="OkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeClusterDeployEnvironmentId"></a>

```csharp
public string OkeClusterDeployEnvironmentId { get; }
```

- *Type:* string

---

##### `ProductionLoadBalancerConfig`<sup>Required</sup> <a name="ProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.productionLoadBalancerConfig"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList ProductionLoadBalancerConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `ReleaseName`<sup>Required</sup> <a name="ReleaseName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.releaseName"></a>

```csharp
public string ReleaseName { get; }
```

- *Type:* string

---

##### `RollbackPolicy`<sup>Required</sup> <a name="RollbackPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rollbackPolicy"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList RollbackPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList</a>

---

##### `RolloutPolicy`<sup>Required</sup> <a name="RolloutPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rolloutPolicy"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList RolloutPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList</a>

---

##### `SetString`<sup>Required</sup> <a name="SetString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setString"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList SetString { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList</a>

---

##### `SetValues`<sup>Required</sup> <a name="SetValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setValues"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList SetValues { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList</a>

---

##### `ShouldCleanupOnFail`<sup>Required</sup> <a name="ShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldCleanupOnFail"></a>

```csharp
public IResolvable ShouldCleanupOnFail { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShouldNotWait`<sup>Required</sup> <a name="ShouldNotWait" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldNotWait"></a>

```csharp
public IResolvable ShouldNotWait { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShouldResetValues`<sup>Required</sup> <a name="ShouldResetValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldResetValues"></a>

```csharp
public IResolvable ShouldResetValues { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShouldReuseValues`<sup>Required</sup> <a name="ShouldReuseValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldReuseValues"></a>

```csharp
public IResolvable ShouldReuseValues { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShouldSkipCrds`<sup>Required</sup> <a name="ShouldSkipCrds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipCrds"></a>

```csharp
public IResolvable ShouldSkipCrds { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShouldSkipRenderSubchartNotes`<sup>Required</sup> <a name="ShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipRenderSubchartNotes"></a>

```csharp
public IResolvable ShouldSkipRenderSubchartNotes { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TestLoadBalancerConfig`<sup>Required</sup> <a name="TestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.testLoadBalancerConfig"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList TestLoadBalancerConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TrafficShiftTarget`<sup>Required</sup> <a name="TrafficShiftTarget" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.trafficShiftTarget"></a>

```csharp
public string TrafficShiftTarget { get; }
```

- *Type:* string

---

##### `ValuesArtifactIds`<sup>Required</sup> <a name="ValuesArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.valuesArtifactIds"></a>

```csharp
public string[] ValuesArtifactIds { get; }
```

- *Type:* string[]

---

##### `WaitCriteria`<sup>Required</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.waitCriteria"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList WaitCriteria { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.listenerName"></a>

```csharp
public string ListenerName { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchCount">BatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchDelayInSeconds">BatchDelayInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchPercentage">BatchPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.rampLimitPercent">RampLimitPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchCount"></a>

```csharp
public double BatchCount { get; }
```

- *Type:* double

---

##### `BatchDelayInSeconds`<sup>Required</sup> <a name="BatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchDelayInSeconds"></a>

```csharp
public double BatchDelayInSeconds { get; }
```

- *Type:* double

---

##### `BatchPercentage`<sup>Required</sup> <a name="BatchPercentage" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchPercentage"></a>

```csharp
public double BatchPercentage { get; }
```

- *Type:* double

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `RampLimitPercent`<sup>Required</sup> <a name="RampLimitPercent" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.rampLimitPercent"></a>

```csharp
public double RampLimitPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString">DataOciDevopsDeployStagesDeployStageCollectionItemsSetString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.items"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetString InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString">DataOciDevopsDeployStagesDeployStageCollectionItemsSetString</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.items"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.backendPort"></a>

```csharp
public double BackendPort { get; }
```

- *Type:* double

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.listenerName"></a>

```csharp
public string ListenerName { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration">WaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitType">WaitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration"></a>

```csharp
public string WaitDuration { get; }
```

- *Type:* string

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitType"></a>

```csharp
public string WaitType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionList <a name="DataOciDevopsDeployStagesDeployStageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get"></a>

```csharp
private DataOciDevopsDeployStagesDeployStageCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDevopsDeployStagesDeployStageCollectionOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesDeployStageCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection">DataOciDevopsDeployStagesDeployStageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.items"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDevopsDeployStagesDeployStageCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection">DataOciDevopsDeployStagesDeployStageCollection</a>

---


### DataOciDevopsDeployStagesFilterList <a name="DataOciDevopsDeployStagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get"></a>

```csharp
private DataOciDevopsDeployStagesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDevopsDeployStagesFilterOutputReference <a name="DataOciDevopsDeployStagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDevopsDeployStagesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



