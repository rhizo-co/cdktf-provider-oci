# `dataOciVisualBuilderVbInstanceApplications` Submodule <a name="`dataOciVisualBuilderVbInstanceApplications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVisualBuilderVbInstanceApplications <a name="DataOciVisualBuilderVbInstanceApplications" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications oci_visual_builder_vb_instance_applications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceApplications(Construct Scope, string Id, DataOciVisualBuilderVbInstanceApplicationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig">DataOciVisualBuilderVbInstanceApplicationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig">DataOciVisualBuilderVbInstanceApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetIdcsOpenId">ResetIdcsOpenId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdcsOpenId` <a name="ResetIdcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetIdcsOpenId"></a>

```csharp
private void ResetIdcsOpenId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVisualBuilderVbInstanceApplications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstanceApplications.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstanceApplications.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstanceApplications.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstanceApplications.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciVisualBuilderVbInstanceApplications resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciVisualBuilderVbInstanceApplications to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciVisualBuilderVbInstanceApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVisualBuilderVbInstanceApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.applicationSummaryCollection">ApplicationSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenIdInput">IdcsOpenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceIdInput">VbInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenId">IdcsOpenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceId">VbInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApplicationSummaryCollection`<sup>Required</sup> <a name="ApplicationSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.applicationSummaryCollection"></a>

```csharp
public DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList ApplicationSummaryCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList</a>

---

##### `IdcsOpenIdInput`<sup>Optional</sup> <a name="IdcsOpenIdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenIdInput"></a>

```csharp
public string IdcsOpenIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VbInstanceIdInput`<sup>Optional</sup> <a name="VbInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceIdInput"></a>

```csharp
public string VbInstanceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsOpenId`<sup>Required</sup> <a name="IdcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenId"></a>

```csharp
public string IdcsOpenId { get; }
```

- *Type:* string

---

##### `VbInstanceId`<sup>Required</sup> <a name="VbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceId"></a>

```csharp
public string VbInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection {

};
```


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems {

};
```


### DataOciVisualBuilderVbInstanceApplicationsConfig <a name="DataOciVisualBuilderVbInstanceApplicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceApplicationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VbInstanceId,
    string Id = null,
    string IdcsOpenId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.vbInstanceId">VbInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#vb_instance_id DataOciVisualBuilderVbInstanceApplications#vb_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#id DataOciVisualBuilderVbInstanceApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.idcsOpenId">IdcsOpenId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#idcs_open_id DataOciVisualBuilderVbInstanceApplications#idcs_open_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VbInstanceId`<sup>Required</sup> <a name="VbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.vbInstanceId"></a>

```csharp
public string VbInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#vb_instance_id DataOciVisualBuilderVbInstanceApplications#vb_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#id DataOciVisualBuilderVbInstanceApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdcsOpenId`<sup>Optional</sup> <a name="IdcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.idcsOpenId"></a>

```csharp
public string IdcsOpenId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#idcs_open_id DataOciVisualBuilderVbInstanceApplications#idcs_open_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.get"></a>

```csharp
private DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems</a>

---


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.get"></a>

```csharp
private DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.items"></a>

```csharp
public DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection</a>

---



