# `dataOciCloudGuardDetectorRecipes` Submodule <a name="`dataOciCloudGuardDetectorRecipes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDetectorRecipes <a name="DataOciCloudGuardDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes oci_cloud_guard_detector_recipes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipes(Construct Scope, string Id, DataOciCloudGuardDetectorRecipesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig">DataOciCloudGuardDetectorRecipesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig">DataOciCloudGuardDetectorRecipesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetResourceMetadataOnly">ResetResourceMetadataOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceMetadataOnly` <a name="ResetResourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetResourceMetadataOnly"></a>

```csharp
private void ResetResourceMetadataOnly()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardDetectorRecipes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardDetectorRecipes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardDetectorRecipes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardDetectorRecipes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardDetectorRecipes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardDetectorRecipes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDetectorRecipes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.detectorRecipeCollection">DetectorRecipeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList">DataOciCloudGuardDetectorRecipesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnlyInput">ResourceMetadataOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnly">ResourceMetadataOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DetectorRecipeCollection`<sup>Required</sup> <a name="DetectorRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.detectorRecipeCollection"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList DetectorRecipeCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filter"></a>

```csharp
public DataOciCloudGuardDetectorRecipesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList">DataOciCloudGuardDetectorRecipesFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceMetadataOnlyInput`<sup>Optional</sup> <a name="ResourceMetadataOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnlyInput"></a>

```csharp
public object ResourceMetadataOnlyInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceMetadataOnly`<sup>Required</sup> <a name="ResourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.resourceMetadataOnly"></a>

```csharp
public object ResourceMetadataOnly { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDetectorRecipesConfig <a name="DataOciCloudGuardDetectorRecipesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string AccessLevel = null,
    object CompartmentIdInSubtree = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    object ResourceMetadataOnly = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.resourceMetadataOnly">ResourceMetadataOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#filter DataOciCloudGuardDetectorRecipes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceMetadataOnly`<sup>Optional</sup> <a name="ResourceMetadataOnly" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.resourceMetadataOnly"></a>

```csharp
public object ResourceMetadataOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}.

---

### DataOciCloudGuardDetectorRecipesDetectorRecipeCollection <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollection {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings {

};
```


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings {

};
```


### DataOciCloudGuardDetectorRecipesFilter <a name="DataOciCloudGuardDetectorRecipesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#name DataOciCloudGuardDetectorRecipes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#values DataOciCloudGuardDetectorRecipes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#regex DataOciCloudGuardDetectorRecipes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#name DataOciCloudGuardDetectorRecipes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#values DataOciCloudGuardDetectorRecipes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipes#regex DataOciCloudGuardDetectorRecipes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">IsPreferred</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPreferred`<sup>Required</sup> <a name="IsPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```csharp
public IResolvable IsPreferred { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```csharp
public string ConfigKey { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList Values { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```csharp
public string ListType { get; }
```

- *Type:* string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```csharp
public string ManagedListType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```csharp
public string QueryField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.configurations"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList Configurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList EntitiesMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```csharp
public IResolvable IsConfigurationAllowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```csharp
public string RiskLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```csharp
public string QueryField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.candidateResponderRules">CandidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CandidateResponderRules`<sup>Required</sup> <a name="CandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.candidateResponderRules"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList CandidateResponderRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.details"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detector"></a>

```csharp
public string Detector { get; }
```

- *Type:* string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.detectorRuleId"></a>

```csharp
public string DetectorRuleId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.entitiesMappings"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList EntitiesMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.managedListTypes"></a>

```csharp
public string[] ManagedListTypes { get; }
```

- *Type:* string[]

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">IsPreferred</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPreferred`<sup>Required</sup> <a name="IsPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```csharp
public IResolvable IsPreferred { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```csharp
public string ConfigKey { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList Values { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```csharp
public string ListType { get; }
```

- *Type:* string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```csharp
public string ManagedListType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```csharp
public string QueryField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList Configurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList EntitiesMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```csharp
public IResolvable IsConfigurationAllowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```csharp
public string RiskLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```csharp
public string QueryField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.candidateResponderRules">CandidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CandidateResponderRules`<sup>Required</sup> <a name="CandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.candidateResponderRules"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList CandidateResponderRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.details"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detector"></a>

```csharp
public string Detector { get; }
```

- *Type:* string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```csharp
public string DetectorRuleId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList EntitiesMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```csharp
public string[] ManagedListTypes { get; }
```

- *Type:* string[]

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detector">Detector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRecipeType">DetectorRecipeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRules">DetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.effectiveDetectorRules">EffectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.sourceDetectorRecipeId">SourceDetectorRecipeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.targetIds">TargetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detector"></a>

```csharp
public string Detector { get; }
```

- *Type:* string

---

##### `DetectorRecipeType`<sup>Required</sup> <a name="DetectorRecipeType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRecipeType"></a>

```csharp
public string DetectorRecipeType { get; }
```

- *Type:* string

---

##### `DetectorRules`<sup>Required</sup> <a name="DetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.detectorRules"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList DetectorRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveDetectorRules`<sup>Required</sup> <a name="EffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.effectiveDetectorRules"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList EffectiveDetectorRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SourceDetectorRecipeId`<sup>Required</sup> <a name="SourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.sourceDetectorRecipeId"></a>

```csharp
public string SourceDetectorRecipeId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.targetIds"></a>

```csharp
public string[] TargetIds { get; }
```

- *Type:* string[]

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems</a>

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference <a name="DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection">DataOciCloudGuardDetectorRecipesDetectorRecipeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.items"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList">DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudGuardDetectorRecipesDetectorRecipeCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesDetectorRecipeCollection">DataOciCloudGuardDetectorRecipesDetectorRecipeCollection</a>

---


### DataOciCloudGuardDetectorRecipesFilterList <a name="DataOciCloudGuardDetectorRecipesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get"></a>

```csharp
private DataOciCloudGuardDetectorRecipesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCloudGuardDetectorRecipesFilterOutputReference <a name="DataOciCloudGuardDetectorRecipesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardDetectorRecipesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipes.DataOciCloudGuardDetectorRecipesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



