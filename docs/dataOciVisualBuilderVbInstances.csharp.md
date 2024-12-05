# `dataOciVisualBuilderVbInstances` Submodule <a name="`dataOciVisualBuilderVbInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVisualBuilderVbInstances <a name="DataOciVisualBuilderVbInstances" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances oci_visual_builder_vb_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstances(Construct Scope, string Id, DataOciVisualBuilderVbInstancesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig">DataOciVisualBuilderVbInstancesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig">DataOciVisualBuilderVbInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVisualBuilderVbInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstances.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstances.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstances.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstances.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciVisualBuilderVbInstances resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciVisualBuilderVbInstances to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciVisualBuilderVbInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVisualBuilderVbInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList">DataOciVisualBuilderVbInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.vbInstanceSummaryCollection">VbInstanceSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filter"></a>

```csharp
public DataOciVisualBuilderVbInstancesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList">DataOciVisualBuilderVbInstancesFilterList</a>

---

##### `VbInstanceSummaryCollection`<sup>Required</sup> <a name="VbInstanceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.vbInstanceSummaryCollection"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList VbInstanceSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVisualBuilderVbInstancesConfig <a name="DataOciVisualBuilderVbInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#compartment_id DataOciVisualBuilderVbInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#display_name DataOciVisualBuilderVbInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#id DataOciVisualBuilderVbInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#state DataOciVisualBuilderVbInstances#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#compartment_id DataOciVisualBuilderVbInstances#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#display_name DataOciVisualBuilderVbInstances#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#filter DataOciVisualBuilderVbInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#id DataOciVisualBuilderVbInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#state DataOciVisualBuilderVbInstances#state}.

---

### DataOciVisualBuilderVbInstancesFilter <a name="DataOciVisualBuilderVbInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#name DataOciVisualBuilderVbInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#values DataOciVisualBuilderVbInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#regex DataOciVisualBuilderVbInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#name DataOciVisualBuilderVbInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#values DataOciVisualBuilderVbInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#regex DataOciVisualBuilderVbInstances#regex}.

---

### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection {

};
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems {

};
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints {

};
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments {

};
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint {

};
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVisualBuilderVbInstancesFilterList <a name="DataOciVisualBuilderVbInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.get"></a>

```csharp
private DataOciVisualBuilderVbInstancesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciVisualBuilderVbInstancesFilterOutputReference <a name="DataOciVisualBuilderVbInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.get"></a>

```csharp
private DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; }
```

- *Type:* string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```csharp
public double CertificateSecretVersion { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.get"></a>

```csharp
private DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.isImplicit">IsImplicit</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetInstanceUrl">TargetInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetRole">TargetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetServiceType">TargetServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsImplicit`<sup>Required</sup> <a name="IsImplicit" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.isImplicit"></a>

```csharp
public IResolvable IsImplicit { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TargetInstanceUrl`<sup>Required</sup> <a name="TargetInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetInstanceUrl"></a>

```csharp
public string TargetInstanceUrl { get; }
```

- *Type:* string

---

##### `TargetRole`<sup>Required</sup> <a name="TargetRole" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetRole"></a>

```csharp
public string TargetRole { get; }
```

- *Type:* string

---

##### `TargetServiceType`<sup>Required</sup> <a name="TargetServiceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetServiceType"></a>

```csharp
public string TargetServiceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.get"></a>

```csharp
private DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; }
```

- *Type:* string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```csharp
public double CertificateSecretVersion { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.get"></a>

```csharp
private DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppDisplayName">IdcsAppDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppId">IdcsAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppLocationUrl">IdcsAppLocationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppName">IdcsAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">InstancePrimaryAudienceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdcsAppDisplayName`<sup>Required</sup> <a name="IdcsAppDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```csharp
public string IdcsAppDisplayName { get; }
```

- *Type:* string

---

##### `IdcsAppId`<sup>Required</sup> <a name="IdcsAppId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppId"></a>

```csharp
public string IdcsAppId { get; }
```

- *Type:* string

---

##### `IdcsAppLocationUrl`<sup>Required</sup> <a name="IdcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```csharp
public string IdcsAppLocationUrl { get; }
```

- *Type:* string

---

##### `IdcsAppName`<sup>Required</sup> <a name="IdcsAppName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppName"></a>

```csharp
public string IdcsAppName { get; }
```

- *Type:* string

---

##### `InstancePrimaryAudienceUrl`<sup>Required</sup> <a name="InstancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```csharp
public string InstancePrimaryAudienceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.get"></a>

```csharp
private DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.alternateCustomEndpoints">AlternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.attachments">Attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.consumptionModel">ConsumptionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsInfo">IdcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsOpenId">IdcsOpenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.isVisualBuilderEnabled">IsVisualBuilderEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementNatGatewayIp">ManagementNatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementVcnId">ManagementVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceNatGatewayIp">ServiceNatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceVcnId">ServiceVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlternateCustomEndpoints`<sup>Required</sup> <a name="AlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.alternateCustomEndpoints"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList AlternateCustomEndpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList</a>

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.attachments"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList Attachments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConsumptionModel`<sup>Required</sup> <a name="ConsumptionModel" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.consumptionModel"></a>

```csharp
public string ConsumptionModel { get; }
```

- *Type:* string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.customEndpoint"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList CustomEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsInfo`<sup>Required</sup> <a name="IdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsInfo"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList IdcsInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList</a>

---

##### `IdcsOpenId`<sup>Required</sup> <a name="IdcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsOpenId"></a>

```csharp
public string IdcsOpenId { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `IsVisualBuilderEnabled`<sup>Required</sup> <a name="IsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.isVisualBuilderEnabled"></a>

```csharp
public IResolvable IsVisualBuilderEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ManagementNatGatewayIp`<sup>Required</sup> <a name="ManagementNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementNatGatewayIp"></a>

```csharp
public string ManagementNatGatewayIp { get; }
```

- *Type:* string

---

##### `ManagementVcnId`<sup>Required</sup> <a name="ManagementVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementVcnId"></a>

```csharp
public string ManagementVcnId { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `ServiceNatGatewayIp`<sup>Required</sup> <a name="ServiceNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceNatGatewayIp"></a>

```csharp
public string ServiceNatGatewayIp { get; }
```

- *Type:* string

---

##### `ServiceVcnId`<sup>Required</sup> <a name="ServiceVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceVcnId"></a>

```csharp
public string ServiceVcnId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.get"></a>

```csharp
private DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection</a>

---



