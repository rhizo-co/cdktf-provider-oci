# `dataOciArtifactsContainerRepositories` Submodule <a name="`dataOciArtifactsContainerRepositories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsContainerRepositories <a name="DataOciArtifactsContainerRepositories" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories oci_artifacts_container_repositories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositories(Construct Scope, string Id, DataOciArtifactsContainerRepositoriesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig">DataOciArtifactsContainerRepositoriesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig">DataOciArtifactsContainerRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetIsPublic">ResetIsPublic</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsPublic` <a name="ResetIsPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetIsPublic"></a>

```csharp
private void ResetIsPublic()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetRepositoryId"></a>

```csharp
private void ResetRepositoryId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciArtifactsContainerRepositories resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciArtifactsContainerRepositories.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciArtifactsContainerRepositories.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciArtifactsContainerRepositories.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciArtifactsContainerRepositories.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciArtifactsContainerRepositories resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciArtifactsContainerRepositories to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciArtifactsContainerRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsContainerRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.containerRepositoryCollection">ContainerRepositoryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList">DataOciArtifactsContainerRepositoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublicInput">IsPublicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublic">IsPublic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ContainerRepositoryCollection`<sup>Required</sup> <a name="ContainerRepositoryCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.containerRepositoryCollection"></a>

```csharp
public DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList ContainerRepositoryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filter"></a>

```csharp
public DataOciArtifactsContainerRepositoriesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList">DataOciArtifactsContainerRepositoriesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsPublicInput`<sup>Optional</sup> <a name="IsPublicInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublicInput"></a>

```csharp
public object IsPublicInput { get; }
```

- *Type:* object

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublic"></a>

```csharp
public object IsPublic { get; }
```

- *Type:* object

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsContainerRepositoriesConfig <a name="DataOciArtifactsContainerRepositoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object CompartmentIdInSubtree = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    object IsPublic = null,
    string RepositoryId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.isPublic">IsPublic</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#filter DataOciArtifactsContainerRepositories#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsPublic`<sup>Optional</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.isPublic"></a>

```csharp
public object IsPublic { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}.

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}.

---

### DataOciArtifactsContainerRepositoriesContainerRepositoryCollection <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesContainerRepositoryCollection {

};
```


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems {

};
```


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme {

};
```


### DataOciArtifactsContainerRepositoriesFilter <a name="DataOciArtifactsContainerRepositoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#name DataOciArtifactsContainerRepositories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#values DataOciArtifactsContainerRepositories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#regex DataOciArtifactsContainerRepositories#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#name DataOciArtifactsContainerRepositories#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#values DataOciArtifactsContainerRepositories#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#regex DataOciArtifactsContainerRepositories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get"></a>

```csharp
private DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.billableSizeInGbs">BillableSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.imageCount">ImageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isImmutable">IsImmutable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isPublic">IsPublic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layerCount">LayerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layersSizeInBytes">LayersSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.readme">Readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeLastPushed">TimeLastPushed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillableSizeInGbs`<sup>Required</sup> <a name="BillableSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.billableSizeInGbs"></a>

```csharp
public string BillableSizeInGbs { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageCount`<sup>Required</sup> <a name="ImageCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.imageCount"></a>

```csharp
public double ImageCount { get; }
```

- *Type:* double

---

##### `IsImmutable`<sup>Required</sup> <a name="IsImmutable" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isImmutable"></a>

```csharp
public IResolvable IsImmutable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isPublic"></a>

```csharp
public IResolvable IsPublic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LayerCount`<sup>Required</sup> <a name="LayerCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layerCount"></a>

```csharp
public double LayerCount { get; }
```

- *Type:* double

---

##### `LayersSizeInBytes`<sup>Required</sup> <a name="LayersSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layersSizeInBytes"></a>

```csharp
public string LayersSizeInBytes { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Readme`<sup>Required</sup> <a name="Readme" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.readme"></a>

```csharp
public DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList Readme { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastPushed`<sup>Required</sup> <a name="TimeLastPushed" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeLastPushed"></a>

```csharp
public string TimeLastPushed { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems</a>

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get"></a>

```csharp
private DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.internalValue"></a>

```csharp
public DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme</a>

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get"></a>

```csharp
private DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.imageCount">ImageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layerCount">LayerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layersSizeInBytes">LayersSizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.remainingItemsCount">RemainingItemsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.repositoryCount">RepositoryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection">DataOciArtifactsContainerRepositoriesContainerRepositoryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageCount`<sup>Required</sup> <a name="ImageCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.imageCount"></a>

```csharp
public double ImageCount { get; }
```

- *Type:* double

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.items"></a>

```csharp
public DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList</a>

---

##### `LayerCount`<sup>Required</sup> <a name="LayerCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layerCount"></a>

```csharp
public double LayerCount { get; }
```

- *Type:* double

---

##### `LayersSizeInBytes`<sup>Required</sup> <a name="LayersSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layersSizeInBytes"></a>

```csharp
public string LayersSizeInBytes { get; }
```

- *Type:* string

---

##### `RemainingItemsCount`<sup>Required</sup> <a name="RemainingItemsCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.remainingItemsCount"></a>

```csharp
public double RemainingItemsCount { get; }
```

- *Type:* double

---

##### `RepositoryCount`<sup>Required</sup> <a name="RepositoryCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.repositoryCount"></a>

```csharp
public double RepositoryCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciArtifactsContainerRepositoriesContainerRepositoryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection">DataOciArtifactsContainerRepositoriesContainerRepositoryCollection</a>

---


### DataOciArtifactsContainerRepositoriesFilterList <a name="DataOciArtifactsContainerRepositoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get"></a>

```csharp
private DataOciArtifactsContainerRepositoriesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciArtifactsContainerRepositoriesFilterOutputReference <a name="DataOciArtifactsContainerRepositoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciArtifactsContainerRepositoriesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



