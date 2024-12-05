# `dataOciResourceSchedulerSchedules` Submodule <a name="`dataOciResourceSchedulerSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciResourceSchedulerSchedules <a name="DataOciResourceSchedulerSchedules" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules oci_resource_scheduler_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedules(Construct Scope, string Id, DataOciResourceSchedulerSchedulesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig">DataOciResourceSchedulerSchedulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig">DataOciResourceSchedulerSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetScheduleId">ResetScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScheduleId` <a name="ResetScheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetScheduleId"></a>

```csharp
private void ResetScheduleId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciResourceSchedulerSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciResourceSchedulerSchedules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciResourceSchedulerSchedules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciResourceSchedulerSchedules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciResourceSchedulerSchedules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciResourceSchedulerSchedules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciResourceSchedulerSchedules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciResourceSchedulerSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciResourceSchedulerSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList">DataOciResourceSchedulerSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleCollection">ScheduleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList">DataOciResourceSchedulerSchedulesScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleIdInput">ScheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleId">ScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filter"></a>

```csharp
public DataOciResourceSchedulerSchedulesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList">DataOciResourceSchedulerSchedulesFilterList</a>

---

##### `ScheduleCollection`<sup>Required</sup> <a name="ScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleCollection"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollectionList ScheduleCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList">DataOciResourceSchedulerSchedulesScheduleCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ScheduleIdInput`<sup>Optional</sup> <a name="ScheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleIdInput"></a>

```csharp
public string ScheduleIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScheduleId`<sup>Required</sup> <a name="ScheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleId"></a>

```csharp
public string ScheduleId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciResourceSchedulerSchedulesConfig <a name="DataOciResourceSchedulerSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string ScheduleId = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.scheduleId">ScheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#filter DataOciResourceSchedulerSchedules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScheduleId`<sup>Optional</sup> <a name="ScheduleId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.scheduleId"></a>

```csharp
public string ScheduleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}.

---

### DataOciResourceSchedulerSchedulesFilter <a name="DataOciResourceSchedulerSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#name DataOciResourceSchedulerSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#values DataOciResourceSchedulerSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#regex DataOciResourceSchedulerSchedules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#name DataOciResourceSchedulerSchedules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#values DataOciResourceSchedulerSchedules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#regex DataOciResourceSchedulerSchedules#regex}.

---

### DataOciResourceSchedulerSchedulesScheduleCollection <a name="DataOciResourceSchedulerSchedulesScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollection {

};
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItems <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItems {

};
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters {

};
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue {

};
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciResourceSchedulerSchedulesFilterList <a name="DataOciResourceSchedulerSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get"></a>

```csharp
private DataOciResourceSchedulerSchedulesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciResourceSchedulerSchedulesFilterOutputReference <a name="DataOciResourceSchedulerSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get"></a>

```csharp
private DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceDetails">RecurrenceDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resourceFilters">ResourceFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resources">Resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeEnds">TimeEnds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeLastRun">TimeLastRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun">TimeNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeStarts">TimeStarts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems">DataOciResourceSchedulerSchedulesScheduleCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RecurrenceDetails`<sup>Required</sup> <a name="RecurrenceDetails" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceDetails"></a>

```csharp
public string RecurrenceDetails { get; }
```

- *Type:* string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; }
```

- *Type:* string

---

##### `ResourceFilters`<sup>Required</sup> <a name="ResourceFilters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resourceFilters"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList ResourceFilters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resources"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList Resources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeEnds`<sup>Required</sup> <a name="TimeEnds" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeEnds"></a>

```csharp
public string TimeEnds { get; }
```

- *Type:* string

---

##### `TimeLastRun`<sup>Required</sup> <a name="TimeLastRun" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeLastRun"></a>

```csharp
public string TimeLastRun { get; }
```

- *Type:* string

---

##### `TimeNextRun`<sup>Required</sup> <a name="TimeNextRun" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun"></a>

```csharp
public string TimeNextRun { get; }
```

- *Type:* string

---

##### `TimeStarts`<sup>Required</sup> <a name="TimeStarts" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeStarts"></a>

```csharp
public string TimeStarts { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems">DataOciResourceSchedulerSchedulesScheduleCollectionItems</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get"></a>

```csharp
private DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.shouldIncludeChildCompartments">ShouldIncludeChildCompartments</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.value">Value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ShouldIncludeChildCompartments`<sup>Required</sup> <a name="ShouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```csharp
public IResolvable ShouldIncludeChildCompartments { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.value"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList Value { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.internalValue"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get"></a>

```csharp
private DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.internalValue"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get"></a>

```csharp
private DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get"></a>

```csharp
private DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection">DataOciResourceSchedulerSchedulesScheduleCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.items"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciResourceSchedulerSchedulesScheduleCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection">DataOciResourceSchedulerSchedulesScheduleCollection</a>

---



