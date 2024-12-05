# `dataOciMeteringComputationSchedule` Submodule <a name="`dataOciMeteringComputationSchedule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationSchedule <a name="DataOciMeteringComputationSchedule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedule oci_metering_computation_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationSchedule(Construct Scope, string Id, DataOciMeteringComputationScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig">DataOciMeteringComputationScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig">DataOciMeteringComputationScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationSchedule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMeteringComputationSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMeteringComputationSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMeteringComputationSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMeteringComputationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.outputFileFormat">OutputFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.queryProperties">QueryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList">DataOciMeteringComputationScheduleQueryPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.resultLocation">ResultLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList">DataOciMeteringComputationScheduleResultLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.savedReportId">SavedReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.scheduleRecurrences">ScheduleRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.timeNextRun">TimeNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.timeScheduled">TimeScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.scheduleIdInput">ScheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.scheduleId">ScheduleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputFileFormat`<sup>Required</sup> <a name="OutputFileFormat" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.outputFileFormat"></a>

```csharp
public string OutputFileFormat { get; }
```

- *Type:* string

---

##### `QueryProperties`<sup>Required</sup> <a name="QueryProperties" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.queryProperties"></a>

```csharp
public DataOciMeteringComputationScheduleQueryPropertiesList QueryProperties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList">DataOciMeteringComputationScheduleQueryPropertiesList</a>

---

##### `ResultLocation`<sup>Required</sup> <a name="ResultLocation" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.resultLocation"></a>

```csharp
public DataOciMeteringComputationScheduleResultLocationList ResultLocation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList">DataOciMeteringComputationScheduleResultLocationList</a>

---

##### `SavedReportId`<sup>Required</sup> <a name="SavedReportId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.savedReportId"></a>

```csharp
public string SavedReportId { get; }
```

- *Type:* string

---

##### `ScheduleRecurrences`<sup>Required</sup> <a name="ScheduleRecurrences" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.scheduleRecurrences"></a>

```csharp
public string ScheduleRecurrences { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeNextRun`<sup>Required</sup> <a name="TimeNextRun" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.timeNextRun"></a>

```csharp
public string TimeNextRun { get; }
```

- *Type:* string

---

##### `TimeScheduled`<sup>Required</sup> <a name="TimeScheduled" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.timeScheduled"></a>

```csharp
public string TimeScheduled { get; }
```

- *Type:* string

---

##### `ScheduleIdInput`<sup>Optional</sup> <a name="ScheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.scheduleIdInput"></a>

```csharp
public string ScheduleIdInput { get; }
```

- *Type:* string

---

##### `ScheduleId`<sup>Required</sup> <a name="ScheduleId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.scheduleId"></a>

```csharp
public string ScheduleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationScheduleConfig <a name="DataOciMeteringComputationScheduleConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ScheduleId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.scheduleId">ScheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedule#schedule_id DataOciMeteringComputationSchedule#schedule_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ScheduleId`<sup>Required</sup> <a name="ScheduleId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleConfig.property.scheduleId"></a>

```csharp
public string ScheduleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedule#schedule_id DataOciMeteringComputationSchedule#schedule_id}.

---

### DataOciMeteringComputationScheduleQueryProperties <a name="DataOciMeteringComputationScheduleQueryProperties" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleQueryProperties {

};
```


### DataOciMeteringComputationScheduleQueryPropertiesDateRange <a name="DataOciMeteringComputationScheduleQueryPropertiesDateRange" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleQueryPropertiesDateRange {

};
```


### DataOciMeteringComputationScheduleQueryPropertiesGroupByTag <a name="DataOciMeteringComputationScheduleQueryPropertiesGroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleQueryPropertiesGroupByTag {

};
```


### DataOciMeteringComputationScheduleResultLocation <a name="DataOciMeteringComputationScheduleResultLocation" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleResultLocation {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationScheduleQueryPropertiesDateRangeList <a name="DataOciMeteringComputationScheduleQueryPropertiesDateRangeList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleQueryPropertiesDateRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.get"></a>

```csharp
private DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference <a name="DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeType">DateRangeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType">DynamicDateRangeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEnded">TimeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStarted">TimeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRange">DataOciMeteringComputationScheduleQueryPropertiesDateRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateRangeType`<sup>Required</sup> <a name="DateRangeType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeType"></a>

```csharp
public string DateRangeType { get; }
```

- *Type:* string

---

##### `DynamicDateRangeType`<sup>Required</sup> <a name="DynamicDateRangeType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType"></a>

```csharp
public string DynamicDateRangeType { get; }
```

- *Type:* string

---

##### `TimeUsageEnded`<sup>Required</sup> <a name="TimeUsageEnded" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEnded"></a>

```csharp
public string TimeUsageEnded { get; }
```

- *Type:* string

---

##### `TimeUsageStarted`<sup>Required</sup> <a name="TimeUsageStarted" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStarted"></a>

```csharp
public string TimeUsageStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationScheduleQueryPropertiesDateRange InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRange">DataOciMeteringComputationScheduleQueryPropertiesDateRange</a>

---


### DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList <a name="DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.get"></a>

```csharp
private DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference <a name="DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTag">DataOciMeteringComputationScheduleQueryPropertiesGroupByTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationScheduleQueryPropertiesGroupByTag InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTag">DataOciMeteringComputationScheduleQueryPropertiesGroupByTag</a>

---


### DataOciMeteringComputationScheduleQueryPropertiesList <a name="DataOciMeteringComputationScheduleQueryPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleQueryPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.get"></a>

```csharp
private DataOciMeteringComputationScheduleQueryPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationScheduleQueryPropertiesOutputReference <a name="DataOciMeteringComputationScheduleQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleQueryPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepth">CompartmentDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.dateRange">DateRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList">DataOciMeteringComputationScheduleQueryPropertiesDateRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.groupBy">GroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTag">GroupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList">DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTime">IsAggregateByTime</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.queryType">QueryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryProperties">DataOciMeteringComputationScheduleQueryProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentDepth`<sup>Required</sup> <a name="CompartmentDepth" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepth"></a>

```csharp
public double CompartmentDepth { get; }
```

- *Type:* double

---

##### `DateRange`<sup>Required</sup> <a name="DateRange" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.dateRange"></a>

```csharp
public DataOciMeteringComputationScheduleQueryPropertiesDateRangeList DateRange { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesDateRangeList">DataOciMeteringComputationScheduleQueryPropertiesDateRangeList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.groupBy"></a>

```csharp
public string[] GroupBy { get; }
```

- *Type:* string[]

---

##### `GroupByTag`<sup>Required</sup> <a name="GroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTag"></a>

```csharp
public DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList GroupByTag { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList">DataOciMeteringComputationScheduleQueryPropertiesGroupByTagList</a>

---

##### `IsAggregateByTime`<sup>Required</sup> <a name="IsAggregateByTime" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTime"></a>

```csharp
public IResolvable IsAggregateByTime { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.queryType"></a>

```csharp
public string QueryType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationScheduleQueryProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleQueryProperties">DataOciMeteringComputationScheduleQueryProperties</a>

---


### DataOciMeteringComputationScheduleResultLocationList <a name="DataOciMeteringComputationScheduleResultLocationList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleResultLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.get"></a>

```csharp
private DataOciMeteringComputationScheduleResultLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMeteringComputationScheduleResultLocationOutputReference <a name="DataOciMeteringComputationScheduleResultLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMeteringComputationScheduleResultLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.locationType">LocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocation">DataOciMeteringComputationScheduleResultLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.locationType"></a>

```csharp
public string LocationType { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocationOutputReference.property.internalValue"></a>

```csharp
public DataOciMeteringComputationScheduleResultLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedule.DataOciMeteringComputationScheduleResultLocation">DataOciMeteringComputationScheduleResultLocation</a>

---



