# `dataOciMonitoringAlarmStatuses` Submodule <a name="`dataOciMonitoringAlarmStatuses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringAlarmStatuses <a name="DataOciMonitoringAlarmStatuses" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses oci_monitoring_alarm_statuses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatuses(Construct Scope, string Id, DataOciMonitoringAlarmStatusesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig">DataOciMonitoringAlarmStatusesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig">DataOciMonitoringAlarmStatusesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEntityId` <a name="ResetEntityId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetEntityId"></a>

```csharp
private void ResetEntityId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMonitoringAlarmStatuses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmStatuses.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmStatuses.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmStatuses.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMonitoringAlarmStatuses.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMonitoringAlarmStatuses resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMonitoringAlarmStatuses to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMonitoringAlarmStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringAlarmStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.alarmStatuses">AlarmStatuses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList">DataOciMonitoringAlarmStatusesAlarmStatusesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList">DataOciMonitoringAlarmStatusesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AlarmStatuses`<sup>Required</sup> <a name="AlarmStatuses" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.alarmStatuses"></a>

```csharp
public DataOciMonitoringAlarmStatusesAlarmStatusesList AlarmStatuses { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList">DataOciMonitoringAlarmStatusesAlarmStatusesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.filter"></a>

```csharp
public DataOciMonitoringAlarmStatusesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList">DataOciMonitoringAlarmStatusesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatuses.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringAlarmStatusesAlarmStatuses <a name="DataOciMonitoringAlarmStatusesAlarmStatuses" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatuses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatuses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesAlarmStatuses {

};
```


### DataOciMonitoringAlarmStatusesAlarmStatusesSuppression <a name="DataOciMonitoringAlarmStatusesAlarmStatusesSuppression" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesAlarmStatusesSuppression {

};
```


### DataOciMonitoringAlarmStatusesConfig <a name="DataOciMonitoringAlarmStatusesConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesConfig {
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
    string EntityId = null,
    object Filter = null,
    string Id = null,
    string ResourceId = null,
    string ServiceName = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#compartment_id DataOciMonitoringAlarmStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#compartment_id_in_subtree DataOciMonitoringAlarmStatuses#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#display_name DataOciMonitoringAlarmStatuses#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.entityId">EntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#entity_id DataOciMonitoringAlarmStatuses#entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#id DataOciMonitoringAlarmStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#resource_id DataOciMonitoringAlarmStatuses#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#service_name DataOciMonitoringAlarmStatuses#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#status DataOciMonitoringAlarmStatuses#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#compartment_id DataOciMonitoringAlarmStatuses#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#compartment_id_in_subtree DataOciMonitoringAlarmStatuses#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#display_name DataOciMonitoringAlarmStatuses#display_name}.

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#entity_id DataOciMonitoringAlarmStatuses#entity_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#filter DataOciMonitoringAlarmStatuses#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#id DataOciMonitoringAlarmStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#resource_id DataOciMonitoringAlarmStatuses#resource_id}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#service_name DataOciMonitoringAlarmStatuses#service_name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#status DataOciMonitoringAlarmStatuses#status}.

---

### DataOciMonitoringAlarmStatusesFilter <a name="DataOciMonitoringAlarmStatusesFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#name DataOciMonitoringAlarmStatuses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#values DataOciMonitoringAlarmStatuses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#regex DataOciMonitoringAlarmStatuses#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#name DataOciMonitoringAlarmStatuses#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#values DataOciMonitoringAlarmStatuses#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_statuses#regex DataOciMonitoringAlarmStatuses#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringAlarmStatusesAlarmStatusesList <a name="DataOciMonitoringAlarmStatusesAlarmStatusesList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesAlarmStatusesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.get"></a>

```csharp
private DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference <a name="DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.alarmSummary">AlarmSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.suppression">Suppression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList">DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.timestampTriggered">TimestampTriggered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatuses">DataOciMonitoringAlarmStatusesAlarmStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmSummary`<sup>Required</sup> <a name="AlarmSummary" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.alarmSummary"></a>

```csharp
public string AlarmSummary { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Suppression`<sup>Required</sup> <a name="Suppression" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.suppression"></a>

```csharp
public DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList Suppression { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList">DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList</a>

---

##### `TimestampTriggered`<sup>Required</sup> <a name="TimestampTriggered" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.timestampTriggered"></a>

```csharp
public string TimestampTriggered { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesOutputReference.property.internalValue"></a>

```csharp
public DataOciMonitoringAlarmStatusesAlarmStatuses InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatuses">DataOciMonitoringAlarmStatusesAlarmStatuses</a>

---


### DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList <a name="DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.get"></a>

```csharp
private DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference <a name="DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.timeSuppressFrom">TimeSuppressFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.timeSuppressUntil">TimeSuppressUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppression">DataOciMonitoringAlarmStatusesAlarmStatusesSuppression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `TimeSuppressFrom`<sup>Required</sup> <a name="TimeSuppressFrom" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.timeSuppressFrom"></a>

```csharp
public string TimeSuppressFrom { get; }
```

- *Type:* string

---

##### `TimeSuppressUntil`<sup>Required</sup> <a name="TimeSuppressUntil" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.timeSuppressUntil"></a>

```csharp
public string TimeSuppressUntil { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppressionOutputReference.property.internalValue"></a>

```csharp
public DataOciMonitoringAlarmStatusesAlarmStatusesSuppression InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesAlarmStatusesSuppression">DataOciMonitoringAlarmStatusesAlarmStatusesSuppression</a>

---


### DataOciMonitoringAlarmStatusesFilterList <a name="DataOciMonitoringAlarmStatusesFilterList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.get"></a>

```csharp
private DataOciMonitoringAlarmStatusesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMonitoringAlarmStatusesFilterOutputReference <a name="DataOciMonitoringAlarmStatusesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMonitoringAlarmStatusesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmStatuses.DataOciMonitoringAlarmStatusesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



