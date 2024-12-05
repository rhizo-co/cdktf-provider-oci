# `dataOciMonitoringAlarmHistoryCollection` Submodule <a name="`dataOciMonitoringAlarmHistoryCollection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringAlarmHistoryCollection <a name="DataOciMonitoringAlarmHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection oci_monitoring_alarm_history_collection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmHistoryCollection(Construct Scope, string Id, DataOciMonitoringAlarmHistoryCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig">DataOciMonitoringAlarmHistoryCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig">DataOciMonitoringAlarmHistoryCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetAlarmHistorytype">ResetAlarmHistorytype</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampGreaterThanOrEqualTo">ResetTimestampGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampLessThan">ResetTimestampLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAlarmHistorytype` <a name="ResetAlarmHistorytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetAlarmHistorytype"></a>

```csharp
private void ResetAlarmHistorytype()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimestampGreaterThanOrEqualTo` <a name="ResetTimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimestampGreaterThanOrEqualTo()
```

##### `ResetTimestampLessThan` <a name="ResetTimestampLessThan" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampLessThan"></a>

```csharp
private void ResetTimestampLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMonitoringAlarmHistoryCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmHistoryCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmHistoryCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmHistoryCollection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmHistoryCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMonitoringAlarmHistoryCollection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMonitoringAlarmHistoryCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMonitoringAlarmHistoryCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringAlarmHistoryCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.entries">Entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList">DataOciMonitoringAlarmHistoryCollectionEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytypeInput">AlarmHistorytypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmIdInput">AlarmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualToInput">TimestampGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThanInput">TimestampLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytype">AlarmHistorytype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmId">AlarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualTo">TimestampGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThan">TimestampLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.entries"></a>

```csharp
public DataOciMonitoringAlarmHistoryCollectionEntriesList Entries { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList">DataOciMonitoringAlarmHistoryCollectionEntriesList</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AlarmHistorytypeInput`<sup>Optional</sup> <a name="AlarmHistorytypeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytypeInput"></a>

```csharp
public string AlarmHistorytypeInput { get; }
```

- *Type:* string

---

##### `AlarmIdInput`<sup>Optional</sup> <a name="AlarmIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmIdInput"></a>

```csharp
public string AlarmIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimestampGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimestampGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualToInput"></a>

```csharp
public string TimestampGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimestampLessThanInput`<sup>Optional</sup> <a name="TimestampLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThanInput"></a>

```csharp
public string TimestampLessThanInput { get; }
```

- *Type:* string

---

##### `AlarmHistorytype`<sup>Required</sup> <a name="AlarmHistorytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytype"></a>

```csharp
public string AlarmHistorytype { get; }
```

- *Type:* string

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmId"></a>

```csharp
public string AlarmId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TimestampGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualTo"></a>

```csharp
public string TimestampGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimestampLessThan`<sup>Required</sup> <a name="TimestampLessThan" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThan"></a>

```csharp
public string TimestampLessThan { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringAlarmHistoryCollectionConfig <a name="DataOciMonitoringAlarmHistoryCollectionConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmHistoryCollectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AlarmId,
    string AlarmHistorytype = null,
    string Id = null,
    string TimestampGreaterThanOrEqualTo = null,
    string TimestampLessThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmId">AlarmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_id DataOciMonitoringAlarmHistoryCollection#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmHistorytype">AlarmHistorytype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_historytype DataOciMonitoringAlarmHistoryCollection#alarm_historytype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#id DataOciMonitoringAlarmHistoryCollection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampGreaterThanOrEqualTo">TimestampGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_greater_than_or_equal_to DataOciMonitoringAlarmHistoryCollection#timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampLessThan">TimestampLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_less_than DataOciMonitoringAlarmHistoryCollection#timestamp_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmId"></a>

```csharp
public string AlarmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_id DataOciMonitoringAlarmHistoryCollection#alarm_id}.

---

##### `AlarmHistorytype`<sup>Optional</sup> <a name="AlarmHistorytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmHistorytype"></a>

```csharp
public string AlarmHistorytype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_historytype DataOciMonitoringAlarmHistoryCollection#alarm_historytype}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#id DataOciMonitoringAlarmHistoryCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimestampGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampGreaterThanOrEqualTo"></a>

```csharp
public string TimestampGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_greater_than_or_equal_to DataOciMonitoringAlarmHistoryCollection#timestamp_greater_than_or_equal_to}.

---

##### `TimestampLessThan`<sup>Optional</sup> <a name="TimestampLessThan" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampLessThan"></a>

```csharp
public string TimestampLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_less_than DataOciMonitoringAlarmHistoryCollection#timestamp_less_than}.

---

### DataOciMonitoringAlarmHistoryCollectionEntries <a name="DataOciMonitoringAlarmHistoryCollectionEntries" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmHistoryCollectionEntries {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringAlarmHistoryCollectionEntriesList <a name="DataOciMonitoringAlarmHistoryCollectionEntriesList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmHistoryCollectionEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.get"></a>

```csharp
private DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference <a name="DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.alarmSummary">AlarmSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestampTriggered">TimestampTriggered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries">DataOciMonitoringAlarmHistoryCollectionEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmSummary`<sup>Required</sup> <a name="AlarmSummary" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.alarmSummary"></a>

```csharp
public string AlarmSummary { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TimestampTriggered`<sup>Required</sup> <a name="TimestampTriggered" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestampTriggered"></a>

```csharp
public string TimestampTriggered { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.internalValue"></a>

```csharp
public DataOciMonitoringAlarmHistoryCollectionEntries InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries">DataOciMonitoringAlarmHistoryCollectionEntries</a>

---



