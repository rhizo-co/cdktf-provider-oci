# `dataOciVisualBuilderVbInstance` Submodule <a name="`dataOciVisualBuilderVbInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVisualBuilderVbInstance <a name="DataOciVisualBuilderVbInstance" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance oci_visual_builder_vb_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstance(Construct Scope, string Id, DataOciVisualBuilderVbInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig">DataOciVisualBuilderVbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig">DataOciVisualBuilderVbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVisualBuilderVbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciVisualBuilderVbInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciVisualBuilderVbInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciVisualBuilderVbInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciVisualBuilderVbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVisualBuilderVbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.alternateCustomEndpoints">AlternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList">DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.attachments">Attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList">DataOciVisualBuilderVbInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.consumptionModel">ConsumptionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList">DataOciVisualBuilderVbInstanceCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.idcsInfo">IdcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList">DataOciVisualBuilderVbInstanceIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.idcsOpenId">IdcsOpenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.isVisualBuilderEnabled">IsVisualBuilderEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.managementNatGatewayIp">ManagementNatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.managementVcnId">ManagementVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.serviceNatGatewayIp">ServiceNatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.serviceVcnId">ServiceVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.vbInstanceIdInput">VbInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.vbInstanceId">VbInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AlternateCustomEndpoints`<sup>Required</sup> <a name="AlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.alternateCustomEndpoints"></a>

```csharp
public DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList AlternateCustomEndpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList">DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList</a>

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.attachments"></a>

```csharp
public DataOciVisualBuilderVbInstanceAttachmentsList Attachments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList">DataOciVisualBuilderVbInstanceAttachmentsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConsumptionModel`<sup>Required</sup> <a name="ConsumptionModel" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.consumptionModel"></a>

```csharp
public string ConsumptionModel { get; }
```

- *Type:* string

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.customEndpoint"></a>

```csharp
public DataOciVisualBuilderVbInstanceCustomEndpointList CustomEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList">DataOciVisualBuilderVbInstanceCustomEndpointList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsInfo`<sup>Required</sup> <a name="IdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.idcsInfo"></a>

```csharp
public DataOciVisualBuilderVbInstanceIdcsInfoList IdcsInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList">DataOciVisualBuilderVbInstanceIdcsInfoList</a>

---

##### `IdcsOpenId`<sup>Required</sup> <a name="IdcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.idcsOpenId"></a>

```csharp
public string IdcsOpenId { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `IsVisualBuilderEnabled`<sup>Required</sup> <a name="IsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.isVisualBuilderEnabled"></a>

```csharp
public IResolvable IsVisualBuilderEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ManagementNatGatewayIp`<sup>Required</sup> <a name="ManagementNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.managementNatGatewayIp"></a>

```csharp
public string ManagementNatGatewayIp { get; }
```

- *Type:* string

---

##### `ManagementVcnId`<sup>Required</sup> <a name="ManagementVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.managementVcnId"></a>

```csharp
public string ManagementVcnId { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `ServiceNatGatewayIp`<sup>Required</sup> <a name="ServiceNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.serviceNatGatewayIp"></a>

```csharp
public string ServiceNatGatewayIp { get; }
```

- *Type:* string

---

##### `ServiceVcnId`<sup>Required</sup> <a name="ServiceVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.serviceVcnId"></a>

```csharp
public string ServiceVcnId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VbInstanceIdInput`<sup>Optional</sup> <a name="VbInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.vbInstanceIdInput"></a>

```csharp
public string VbInstanceIdInput { get; }
```

- *Type:* string

---

##### `VbInstanceId`<sup>Required</sup> <a name="VbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.vbInstanceId"></a>

```csharp
public string VbInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVisualBuilderVbInstanceAlternateCustomEndpoints <a name="DataOciVisualBuilderVbInstanceAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceAlternateCustomEndpoints {

};
```


### DataOciVisualBuilderVbInstanceAttachments <a name="DataOciVisualBuilderVbInstanceAttachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceAttachments {

};
```


### DataOciVisualBuilderVbInstanceConfig <a name="DataOciVisualBuilderVbInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VbInstanceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.vbInstanceId">VbInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance#vb_instance_id DataOciVisualBuilderVbInstance#vb_instance_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VbInstanceId`<sup>Required</sup> <a name="VbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.vbInstanceId"></a>

```csharp
public string VbInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance#vb_instance_id DataOciVisualBuilderVbInstance#vb_instance_id}.

---

### DataOciVisualBuilderVbInstanceCustomEndpoint <a name="DataOciVisualBuilderVbInstanceCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceCustomEndpoint {

};
```


### DataOciVisualBuilderVbInstanceIdcsInfo <a name="DataOciVisualBuilderVbInstanceIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceIdcsInfo {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList <a name="DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.get"></a>

```csharp
private DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference <a name="DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpoints">DataOciVisualBuilderVbInstanceAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; }
```

- *Type:* string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```csharp
public double CertificateSecretVersion { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstanceAlternateCustomEndpoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpoints">DataOciVisualBuilderVbInstanceAlternateCustomEndpoints</a>

---


### DataOciVisualBuilderVbInstanceAttachmentsList <a name="DataOciVisualBuilderVbInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.get"></a>

```csharp
private DataOciVisualBuilderVbInstanceAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceAttachmentsOutputReference <a name="DataOciVisualBuilderVbInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.isImplicit">IsImplicit</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetInstanceUrl">TargetInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetRole">TargetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetServiceType">TargetServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachments">DataOciVisualBuilderVbInstanceAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsImplicit`<sup>Required</sup> <a name="IsImplicit" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.isImplicit"></a>

```csharp
public IResolvable IsImplicit { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TargetInstanceUrl`<sup>Required</sup> <a name="TargetInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```csharp
public string TargetInstanceUrl { get; }
```

- *Type:* string

---

##### `TargetRole`<sup>Required</sup> <a name="TargetRole" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetRole"></a>

```csharp
public string TargetRole { get; }
```

- *Type:* string

---

##### `TargetServiceType`<sup>Required</sup> <a name="TargetServiceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```csharp
public string TargetServiceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstanceAttachments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachments">DataOciVisualBuilderVbInstanceAttachments</a>

---


### DataOciVisualBuilderVbInstanceCustomEndpointList <a name="DataOciVisualBuilderVbInstanceCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceCustomEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.get"></a>

```csharp
private DataOciVisualBuilderVbInstanceCustomEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceCustomEndpointOutputReference <a name="DataOciVisualBuilderVbInstanceCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceCustomEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretId">CertificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretVersion">CertificateSecretVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpoint">DataOciVisualBuilderVbInstanceCustomEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateSecretId`<sup>Required</sup> <a name="CertificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretId"></a>

```csharp
public string CertificateSecretId { get; }
```

- *Type:* string

---

##### `CertificateSecretVersion`<sup>Required</sup> <a name="CertificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```csharp
public double CertificateSecretVersion { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstanceCustomEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpoint">DataOciVisualBuilderVbInstanceCustomEndpoint</a>

---


### DataOciVisualBuilderVbInstanceIdcsInfoList <a name="DataOciVisualBuilderVbInstanceIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceIdcsInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.get"></a>

```csharp
private DataOciVisualBuilderVbInstanceIdcsInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceIdcsInfoOutputReference <a name="DataOciVisualBuilderVbInstanceIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciVisualBuilderVbInstanceIdcsInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppDisplayName">IdcsAppDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppId">IdcsAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl">IdcsAppLocationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppName">IdcsAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">InstancePrimaryAudienceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfo">DataOciVisualBuilderVbInstanceIdcsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdcsAppDisplayName`<sup>Required</sup> <a name="IdcsAppDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```csharp
public string IdcsAppDisplayName { get; }
```

- *Type:* string

---

##### `IdcsAppId`<sup>Required</sup> <a name="IdcsAppId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppId"></a>

```csharp
public string IdcsAppId { get; }
```

- *Type:* string

---

##### `IdcsAppLocationUrl`<sup>Required</sup> <a name="IdcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```csharp
public string IdcsAppLocationUrl { get; }
```

- *Type:* string

---

##### `IdcsAppName`<sup>Required</sup> <a name="IdcsAppName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppName"></a>

```csharp
public string IdcsAppName { get; }
```

- *Type:* string

---

##### `InstancePrimaryAudienceUrl`<sup>Required</sup> <a name="InstancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```csharp
public string InstancePrimaryAudienceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciVisualBuilderVbInstanceIdcsInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfo">DataOciVisualBuilderVbInstanceIdcsInfo</a>

---



