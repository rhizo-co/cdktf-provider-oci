# `dataOciMonitoringAlarmSuppressions` Submodule <a name="`dataOciMonitoringAlarmSuppressions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringAlarmSuppressions <a name="DataOciMonitoringAlarmSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions oci_monitoring_alarm_suppressions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressions(Construct Scope, string Id, DataOciMonitoringAlarmSuppressionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig">DataOciMonitoringAlarmSuppressionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig">DataOciMonitoringAlarmSuppressionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetAlarmId">ResetAlarmId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetIsAllSuppressions">ResetIsAllSuppressions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetTargetType">ResetTargetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAlarmId` <a name="ResetAlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetAlarmId"></a>

```csharp
private void ResetAlarmId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAllSuppressions` <a name="ResetIsAllSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetIsAllSuppressions"></a>

```csharp
private void ResetIsAllSuppressions()
```

##### `ResetLevel` <a name="ResetLevel" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetType` <a name="ResetTargetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.resetTargetType"></a>

```csharp
private void ResetTargetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMonitoringAlarmSuppressions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmSuppressions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmSuppressions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmSuppressions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmSuppressions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMonitoringAlarmSuppressions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMonitoringAlarmSuppressions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMonitoringAlarmSuppressions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringAlarmSuppressions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmSuppressionCollection">AlarmSuppressionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList">DataOciMonitoringAlarmSuppressionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmIdInput">AlarmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressionsInput">IsAllSuppressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmId">AlarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressions">IsAllSuppressions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AlarmSuppressionCollection`<sup>Required</sup> <a name="AlarmSuppressionCollection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmSuppressionCollection"></a>

```csharp
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList AlarmSuppressionCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filter"></a>

```csharp
public DataOciMonitoringAlarmSuppressionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList">DataOciMonitoringAlarmSuppressionsFilterList</a>

---

##### `AlarmIdInput`<sup>Optional</sup> <a name="AlarmIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmIdInput"></a>

```csharp
public string AlarmIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAllSuppressionsInput`<sup>Optional</sup> <a name="IsAllSuppressionsInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressionsInput"></a>

```csharp
public object IsAllSuppressionsInput { get; }
```

- *Type:* object

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.alarmId"></a>

```csharp
public string AlarmId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAllSuppressions`<sup>Required</sup> <a name="IsAllSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.isAllSuppressions"></a>

```csharp
public object IsAllSuppressions { get; }
```

- *Type:* object

---

##### `Level`<sup>Required</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection {

};
```


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems {

};
```


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget {

};
```


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions {

};
```


### DataOciMonitoringAlarmSuppressionsConfig <a name="DataOciMonitoringAlarmSuppressionsConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AlarmId = null,
    string CompartmentId = null,
    object CompartmentIdInSubtree = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    object IsAllSuppressions = null,
    string Level = null,
    string State = null,
    string TargetType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.alarmId">AlarmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.isAllSuppressions">IsAllSuppressions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AlarmId`<sup>Optional</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.alarmId"></a>

```csharp
public string AlarmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#alarm_id DataOciMonitoringAlarmSuppressions#alarm_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id DataOciMonitoringAlarmSuppressions#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#compartment_id_in_subtree DataOciMonitoringAlarmSuppressions#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#display_name DataOciMonitoringAlarmSuppressions#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#filter DataOciMonitoringAlarmSuppressions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#id DataOciMonitoringAlarmSuppressions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAllSuppressions`<sup>Optional</sup> <a name="IsAllSuppressions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.isAllSuppressions"></a>

```csharp
public object IsAllSuppressions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#is_all_suppressions DataOciMonitoringAlarmSuppressions#is_all_suppressions}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#level DataOciMonitoringAlarmSuppressions#level}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#state DataOciMonitoringAlarmSuppressions#state}.

---

##### `TargetType`<sup>Optional</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsConfig.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#target_type DataOciMonitoringAlarmSuppressions#target_type}.

---

### DataOciMonitoringAlarmSuppressionsFilter <a name="DataOciMonitoringAlarmSuppressionsFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#name DataOciMonitoringAlarmSuppressions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#values DataOciMonitoringAlarmSuppressions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#regex DataOciMonitoringAlarmSuppressions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#name DataOciMonitoringAlarmSuppressions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#values DataOciMonitoringAlarmSuppressions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppressions#regex DataOciMonitoringAlarmSuppressions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.get"></a>

```csharp
private DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.alarmId">AlarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.alarmId"></a>

```csharp
public string AlarmId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree"></a>

```csharp
public IResolvable CompartmentIdInSubtree { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetOutputReference.property.internalValue"></a>

```csharp
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTarget</a>

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.get"></a>

```csharp
private DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.alarmSuppressionTarget">AlarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.dimensions">Dimensions</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.suppressionConditions">SuppressionConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressFrom">TimeSuppressFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressUntil">TimeSuppressUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmSuppressionTarget`<sup>Required</sup> <a name="AlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.alarmSuppressionTarget"></a>

```csharp
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList AlarmSuppressionTarget { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsAlarmSuppressionTargetList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.dimensions"></a>

```csharp
public StringMap Dimensions { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SuppressionConditions`<sup>Required</sup> <a name="SuppressionConditions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.suppressionConditions"></a>

```csharp
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList SuppressionConditions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeSuppressFrom`<sup>Required</sup> <a name="TimeSuppressFrom" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressFrom"></a>

```csharp
public string TimeSuppressFrom { get; }
```

- *Type:* string

---

##### `TimeSuppressUntil`<sup>Required</sup> <a name="TimeSuppressUntil" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeSuppressUntil"></a>

```csharp
public string TimeSuppressUntil { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItems</a>

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.get"></a>

```csharp
private DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.conditionType">ConditionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionDuration">SuppressionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionRecurrence">SuppressionRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionType`<sup>Required</sup> <a name="ConditionType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.conditionType"></a>

```csharp
public string ConditionType { get; }
```

- *Type:* string

---

##### `SuppressionDuration`<sup>Required</sup> <a name="SuppressionDuration" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionDuration"></a>

```csharp
public string SuppressionDuration { get; }
```

- *Type:* string

---

##### `SuppressionRecurrence`<sup>Required</sup> <a name="SuppressionRecurrence" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.suppressionRecurrence"></a>

```csharp
public string SuppressionRecurrence { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditionsOutputReference.property.internalValue"></a>

```csharp
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsSuppressionConditions</a>

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.get"></a>

```csharp
private DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference <a name="DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.items"></a>

```csharp
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection">DataOciMonitoringAlarmSuppressionsAlarmSuppressionCollection</a>

---


### DataOciMonitoringAlarmSuppressionsFilterList <a name="DataOciMonitoringAlarmSuppressionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.get"></a>

```csharp
private DataOciMonitoringAlarmSuppressionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMonitoringAlarmSuppressionsFilterOutputReference <a name="DataOciMonitoringAlarmSuppressionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmSuppressionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppressions.DataOciMonitoringAlarmSuppressionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



