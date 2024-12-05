# `dataOciApmSyntheticsMonitors` Submodule <a name="`dataOciApmSyntheticsMonitors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsMonitors <a name="DataOciApmSyntheticsMonitors" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors oci_apm_synthetics_monitors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitors(Construct Scope, string Id, DataOciApmSyntheticsMonitorsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig">DataOciApmSyntheticsMonitorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig">DataOciApmSyntheticsMonitorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowActive">ResetIsMaintenanceWindowActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowSet">ResetIsMaintenanceWindowSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetMonitorType">ResetMonitorType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetScriptId">ResetScriptId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetVantagePoint">ResetVantagePoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsMaintenanceWindowActive` <a name="ResetIsMaintenanceWindowActive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowActive"></a>

```csharp
private void ResetIsMaintenanceWindowActive()
```

##### `ResetIsMaintenanceWindowSet` <a name="ResetIsMaintenanceWindowSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetIsMaintenanceWindowSet"></a>

```csharp
private void ResetIsMaintenanceWindowSet()
```

##### `ResetMonitorType` <a name="ResetMonitorType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetMonitorType"></a>

```csharp
private void ResetMonitorType()
```

##### `ResetScriptId` <a name="ResetScriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetScriptId"></a>

```csharp
private void ResetScriptId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetVantagePoint` <a name="ResetVantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.resetVantagePoint"></a>

```csharp
private void ResetVantagePoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsMonitors.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsMonitors.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsMonitors.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciApmSyntheticsMonitors.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciApmSyntheticsMonitors resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmSyntheticsMonitors to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmSyntheticsMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList">DataOciApmSyntheticsMonitorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorCollection">MonitorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList">DataOciApmSyntheticsMonitorsMonitorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActiveInput">IsMaintenanceWindowActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSetInput">IsMaintenanceWindowSetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorTypeInput">MonitorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptIdInput">ScriptIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePointInput">VantagePointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActive">IsMaintenanceWindowActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSet">IsMaintenanceWindowSet</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorType">MonitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptId">ScriptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePoint">VantagePoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filter"></a>

```csharp
public DataOciApmSyntheticsMonitorsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList">DataOciApmSyntheticsMonitorsFilterList</a>

---

##### `MonitorCollection`<sup>Required</sup> <a name="MonitorCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorCollection"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionList MonitorCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList">DataOciApmSyntheticsMonitorsMonitorCollectionList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainIdInput"></a>

```csharp
public string ApmDomainIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsMaintenanceWindowActiveInput`<sup>Optional</sup> <a name="IsMaintenanceWindowActiveInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActiveInput"></a>

```csharp
public object IsMaintenanceWindowActiveInput { get; }
```

- *Type:* object

---

##### `IsMaintenanceWindowSetInput`<sup>Optional</sup> <a name="IsMaintenanceWindowSetInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSetInput"></a>

```csharp
public object IsMaintenanceWindowSetInput { get; }
```

- *Type:* object

---

##### `MonitorTypeInput`<sup>Optional</sup> <a name="MonitorTypeInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorTypeInput"></a>

```csharp
public string MonitorTypeInput { get; }
```

- *Type:* string

---

##### `ScriptIdInput`<sup>Optional</sup> <a name="ScriptIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptIdInput"></a>

```csharp
public string ScriptIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `VantagePointInput`<sup>Optional</sup> <a name="VantagePointInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePointInput"></a>

```csharp
public string VantagePointInput { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMaintenanceWindowActive`<sup>Required</sup> <a name="IsMaintenanceWindowActive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowActive"></a>

```csharp
public object IsMaintenanceWindowActive { get; }
```

- *Type:* object

---

##### `IsMaintenanceWindowSet`<sup>Required</sup> <a name="IsMaintenanceWindowSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.isMaintenanceWindowSet"></a>

```csharp
public object IsMaintenanceWindowSet { get; }
```

- *Type:* object

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.monitorType"></a>

```csharp
public string MonitorType { get; }
```

- *Type:* string

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.scriptId"></a>

```csharp
public string ScriptId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VantagePoint`<sup>Required</sup> <a name="VantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.vantagePoint"></a>

```csharp
public string VantagePoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitors.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsMonitorsConfig <a name="DataOciApmSyntheticsMonitorsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApmDomainId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    object IsMaintenanceWindowActive = null,
    object IsMaintenanceWindowSet = null,
    string MonitorType = null,
    string ScriptId = null,
    string Status = null,
    string VantagePoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#apm_domain_id DataOciApmSyntheticsMonitors#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#display_name DataOciApmSyntheticsMonitors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#id DataOciApmSyntheticsMonitors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowActive">IsMaintenanceWindowActive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_active DataOciApmSyntheticsMonitors#is_maintenance_window_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowSet">IsMaintenanceWindowSet</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_set DataOciApmSyntheticsMonitors#is_maintenance_window_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.monitorType">MonitorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#monitor_type DataOciApmSyntheticsMonitors#monitor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.scriptId">ScriptId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#script_id DataOciApmSyntheticsMonitors#script_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#status DataOciApmSyntheticsMonitors#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.vantagePoint">VantagePoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#vantage_point DataOciApmSyntheticsMonitors#vantage_point}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#apm_domain_id DataOciApmSyntheticsMonitors#apm_domain_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#display_name DataOciApmSyntheticsMonitors#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#filter DataOciApmSyntheticsMonitors#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#id DataOciApmSyntheticsMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsMaintenanceWindowActive`<sup>Optional</sup> <a name="IsMaintenanceWindowActive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowActive"></a>

```csharp
public object IsMaintenanceWindowActive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_active DataOciApmSyntheticsMonitors#is_maintenance_window_active}.

---

##### `IsMaintenanceWindowSet`<sup>Optional</sup> <a name="IsMaintenanceWindowSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.isMaintenanceWindowSet"></a>

```csharp
public object IsMaintenanceWindowSet { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#is_maintenance_window_set DataOciApmSyntheticsMonitors#is_maintenance_window_set}.

---

##### `MonitorType`<sup>Optional</sup> <a name="MonitorType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.monitorType"></a>

```csharp
public string MonitorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#monitor_type DataOciApmSyntheticsMonitors#monitor_type}.

---

##### `ScriptId`<sup>Optional</sup> <a name="ScriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.scriptId"></a>

```csharp
public string ScriptId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#script_id DataOciApmSyntheticsMonitors#script_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#status DataOciApmSyntheticsMonitors#status}.

---

##### `VantagePoint`<sup>Optional</sup> <a name="VantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsConfig.property.vantagePoint"></a>

```csharp
public string VantagePoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#vantage_point DataOciApmSyntheticsMonitors#vantage_point}.

---

### DataOciApmSyntheticsMonitorsFilter <a name="DataOciApmSyntheticsMonitorsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#name DataOciApmSyntheticsMonitors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#values DataOciApmSyntheticsMonitors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#regex DataOciApmSyntheticsMonitors#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#name DataOciApmSyntheticsMonitors#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#values DataOciApmSyntheticsMonitors#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitors#regex DataOciApmSyntheticsMonitors#regex}.

---

### DataOciApmSyntheticsMonitorsMonitorCollection <a name="DataOciApmSyntheticsMonitorsMonitorCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollection {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItems <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItems {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter {

};
```


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsMonitorsFilterList <a name="DataOciApmSyntheticsMonitorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciApmSyntheticsMonitorsFilterOutputReference <a name="DataOciApmSyntheticsMonitorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval">MaxAllowedFailuresPerInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval">MinAllowedRunsPerInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAllowedFailuresPerInterval`<sup>Required</sup> <a name="MaxAllowedFailuresPerInterval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval"></a>

```csharp
public double MaxAllowedFailuresPerInterval { get; }
```

- *Type:* double

---

##### `MinAllowedRunsPerInterval`<sup>Required</sup> <a name="MinAllowedRunsPerInterval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval"></a>

```csharp
public double MinAllowedRunsPerInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificate</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.privateKey">PrivateKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.clientCertificate"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList ClientCertificate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsClientCertificateList</a>

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.privateKey"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList PrivateKey { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsPrivateKey</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.password">Password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.password"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList Password { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType">PasswordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">VaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordType`<sup>Required</sup> <a name="PasswordType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```csharp
public string PasswordType { get; }
```

- *Type:* string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```csharp
public string VaultSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet">DatabaseWallet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseWallet`<sup>Required</sup> <a name="DatabaseWallet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet"></a>

```csharp
public string DatabaseWallet { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.isOverrideDns">IsOverrideDns</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.overrideDnsIp">OverrideDnsIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsOverrideDns`<sup>Required</sup> <a name="IsOverrideDns" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.isOverrideDns"></a>

```csharp
public IResolvable IsOverrideDns { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OverrideDnsIp`<sup>Required</sup> <a name="OverrideDnsIp" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.overrideDnsIp"></a>

```csharp
public string OverrideDnsIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password">Password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList Password { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType">PasswordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">VaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordType`<sup>Required</sup> <a name="PasswordType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```csharp
public string PasswordType { get; }
```

- *Type:* string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```csharp
public string VaultSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.numberOfHops">NumberOfHops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probeMode">ProbeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probePerHop">ProbePerHop</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.transmissionRate">TransmissionRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberOfHops`<sup>Required</sup> <a name="NumberOfHops" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.numberOfHops"></a>

```csharp
public double NumberOfHops { get; }
```

- *Type:* double

---

##### `ProbeMode`<sup>Required</sup> <a name="ProbeMode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probeMode"></a>

```csharp
public string ProbeMode { get; }
```

- *Type:* string

---

##### `ProbePerHop`<sup>Required</sup> <a name="ProbePerHop" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.probePerHop"></a>

```csharp
public double ProbePerHop { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `TransmissionRate`<sup>Required</sup> <a name="TransmissionRate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.transmissionRate"></a>

```csharp
public double TransmissionRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.clientCertificateDetails">ClientCertificateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.configType">ConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseAuthenticationDetails">DatabaseAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseConnectionType">DatabaseConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseRole">DatabaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseWalletDetails">DatabaseWalletDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.dnsConfiguration">DnsConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.downloadSizeLimitInBytes">DownloadSizeLimitInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpBasicAuthenticationDetails">FtpBasicAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpProtocol">FtpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpRequestType">FtpRequestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isActiveMode">IsActiveMode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isCertificateValidationEnabled">IsCertificateValidationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isDefaultSnapshotEnabled">IsDefaultSnapshotEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isFailureRetried">IsFailureRetried</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isQueryRecursive">IsQueryRecursive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isRedirectionEnabled">IsRedirectionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.nameServer">NameServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.recordType">RecordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationDetails">ReqAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationScheme">ReqAuthenticationScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestMethod">RequestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestPostBody">RequestPostBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestQueryParams">RequestQueryParams</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.uploadFileSizeInBytes">UploadFileSizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseCodes">VerifyResponseCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseContent">VerifyResponseContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyTexts">VerifyTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientCertificateDetails`<sup>Required</sup> <a name="ClientCertificateDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.clientCertificateDetails"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList ClientCertificateDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationClientCertificateDetailsList</a>

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.configType"></a>

```csharp
public string ConfigType { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `DatabaseAuthenticationDetails`<sup>Required</sup> <a name="DatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseAuthenticationDetails"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList DatabaseAuthenticationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseAuthenticationDetailsList</a>

---

##### `DatabaseConnectionType`<sup>Required</sup> <a name="DatabaseConnectionType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseConnectionType"></a>

```csharp
public string DatabaseConnectionType { get; }
```

- *Type:* string

---

##### `DatabaseRole`<sup>Required</sup> <a name="DatabaseRole" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseRole"></a>

```csharp
public string DatabaseRole { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DatabaseWalletDetails`<sup>Required</sup> <a name="DatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.databaseWalletDetails"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList DatabaseWalletDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDatabaseWalletDetailsList</a>

---

##### `DnsConfiguration`<sup>Required</sup> <a name="DnsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.dnsConfiguration"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList DnsConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationDnsConfigurationList</a>

---

##### `DownloadSizeLimitInBytes`<sup>Required</sup> <a name="DownloadSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.downloadSizeLimitInBytes"></a>

```csharp
public double DownloadSizeLimitInBytes { get; }
```

- *Type:* double

---

##### `FtpBasicAuthenticationDetails`<sup>Required</sup> <a name="FtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpBasicAuthenticationDetails"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList FtpBasicAuthenticationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationFtpBasicAuthenticationDetailsList</a>

---

##### `FtpProtocol`<sup>Required</sup> <a name="FtpProtocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpProtocol"></a>

```csharp
public string FtpProtocol { get; }
```

- *Type:* string

---

##### `FtpRequestType`<sup>Required</sup> <a name="FtpRequestType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.ftpRequestType"></a>

```csharp
public string FtpRequestType { get; }
```

- *Type:* string

---

##### `IsActiveMode`<sup>Required</sup> <a name="IsActiveMode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isActiveMode"></a>

```csharp
public IResolvable IsActiveMode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsCertificateValidationEnabled`<sup>Required</sup> <a name="IsCertificateValidationEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isCertificateValidationEnabled"></a>

```csharp
public IResolvable IsCertificateValidationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsDefaultSnapshotEnabled`<sup>Required</sup> <a name="IsDefaultSnapshotEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isDefaultSnapshotEnabled"></a>

```csharp
public IResolvable IsDefaultSnapshotEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsFailureRetried`<sup>Required</sup> <a name="IsFailureRetried" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isFailureRetried"></a>

```csharp
public IResolvable IsFailureRetried { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsQueryRecursive`<sup>Required</sup> <a name="IsQueryRecursive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isQueryRecursive"></a>

```csharp
public IResolvable IsQueryRecursive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRedirectionEnabled`<sup>Required</sup> <a name="IsRedirectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.isRedirectionEnabled"></a>

```csharp
public IResolvable IsRedirectionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NameServer`<sup>Required</sup> <a name="NameServer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.nameServer"></a>

```csharp
public string NameServer { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.networkConfiguration"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList NetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationNetworkConfigurationList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RecordType`<sup>Required</sup> <a name="RecordType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.recordType"></a>

```csharp
public string RecordType { get; }
```

- *Type:* string

---

##### `ReqAuthenticationDetails`<sup>Required</sup> <a name="ReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationDetails"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList ReqAuthenticationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList</a>

---

##### `ReqAuthenticationScheme`<sup>Required</sup> <a name="ReqAuthenticationScheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.reqAuthenticationScheme"></a>

```csharp
public string ReqAuthenticationScheme { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestHeaders"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList RequestHeaders { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList</a>

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestMethod"></a>

```csharp
public string RequestMethod { get; }
```

- *Type:* string

---

##### `RequestPostBody`<sup>Required</sup> <a name="RequestPostBody" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestPostBody"></a>

```csharp
public string RequestPostBody { get; }
```

- *Type:* string

---

##### `RequestQueryParams`<sup>Required</sup> <a name="RequestQueryParams" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.requestQueryParams"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList RequestQueryParams { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList</a>

---

##### `UploadFileSizeInBytes`<sup>Required</sup> <a name="UploadFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.uploadFileSizeInBytes"></a>

```csharp
public double UploadFileSizeInBytes { get; }
```

- *Type:* double

---

##### `VerifyResponseCodes`<sup>Required</sup> <a name="VerifyResponseCodes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseCodes"></a>

```csharp
public string[] VerifyResponseCodes { get; }
```

- *Type:* string[]

---

##### `VerifyResponseContent`<sup>Required</sup> <a name="VerifyResponseContent" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyResponseContent"></a>

```csharp
public string VerifyResponseContent { get; }
```

- *Type:* string

---

##### `VerifyTexts`<sup>Required</sup> <a name="VerifyTexts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.verifyTexts"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList VerifyTexts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfiguration</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue">HeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue"></a>

```csharp
public string HeaderValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeaders</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders">AuthHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod">AuthRequestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody">AuthRequestPostBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authToken">AuthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUrl">AuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserName">AuthUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword">AuthUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme">OauthScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthHeaders`<sup>Required</sup> <a name="AuthHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList AuthHeaders { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsAuthHeadersList</a>

---

##### `AuthRequestMethod`<sup>Required</sup> <a name="AuthRequestMethod" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod"></a>

```csharp
public string AuthRequestMethod { get; }
```

- *Type:* string

---

##### `AuthRequestPostBody`<sup>Required</sup> <a name="AuthRequestPostBody" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody"></a>

```csharp
public string AuthRequestPostBody { get; }
```

- *Type:* string

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authToken"></a>

```csharp
public string AuthToken { get; }
```

- *Type:* string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUrl"></a>

```csharp
public string AuthUrl { get; }
```

- *Type:* string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserName"></a>

```csharp
public string AuthUserName { get; }
```

- *Type:* string

---

##### `AuthUserPassword`<sup>Required</sup> <a name="AuthUserPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword"></a>

```csharp
public string AuthUserPassword { get; }
```

- *Type:* string

---

##### `OauthScheme`<sup>Required</sup> <a name="OauthScheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme"></a>

```csharp
public string OauthScheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationReqAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerValue">HeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.headerValue"></a>

```csharp
public string HeaderValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeadersOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestHeaders</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramName">ParamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramValue">ParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParamName`<sup>Required</sup> <a name="ParamName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramName"></a>

```csharp
public string ParamName { get; }
```

- *Type:* string

---

##### `ParamValue`<sup>Required</sup> <a name="ParamValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.paramValue"></a>

```csharp
public string ParamValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParamsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationRequestQueryParams</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTextsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationVerifyTexts</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowSchedule</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.apmDomainId">ApmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.availabilityConfiguration">AvailabilityConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.batchIntervalInSeconds">BatchIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.configuration">Configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isIpv6">IsIpv6</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunNow">IsRunNow</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunOnce">IsRunOnce</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.maintenanceWindowSchedule">MaintenanceWindowSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.monitorType">MonitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.repeatIntervalInSeconds">RepeatIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptId">ScriptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptParameters">ScriptParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePointCount">VantagePointCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePoints">VantagePoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems">DataOciApmSyntheticsMonitorsMonitorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.apmDomainId"></a>

```csharp
public string ApmDomainId { get; }
```

- *Type:* string

---

##### `AvailabilityConfiguration`<sup>Required</sup> <a name="AvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.availabilityConfiguration"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList AvailabilityConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsAvailabilityConfigurationList</a>

---

##### `BatchIntervalInSeconds`<sup>Required</sup> <a name="BatchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.batchIntervalInSeconds"></a>

```csharp
public double BatchIntervalInSeconds { get; }
```

- *Type:* double

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.configuration"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList Configuration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsConfigurationList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsIpv6`<sup>Required</sup> <a name="IsIpv6" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isIpv6"></a>

```csharp
public IResolvable IsIpv6 { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRunNow`<sup>Required</sup> <a name="IsRunNow" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunNow"></a>

```csharp
public IResolvable IsRunNow { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRunOnce`<sup>Required</sup> <a name="IsRunOnce" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.isRunOnce"></a>

```csharp
public IResolvable IsRunOnce { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```csharp
public string LastUpdatedBy { get; }
```

- *Type:* string

---

##### `MaintenanceWindowSchedule`<sup>Required</sup> <a name="MaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.maintenanceWindowSchedule"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList MaintenanceWindowSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsMaintenanceWindowScheduleList</a>

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.monitorType"></a>

```csharp
public string MonitorType { get; }
```

- *Type:* string

---

##### `RepeatIntervalInSeconds`<sup>Required</sup> <a name="RepeatIntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.repeatIntervalInSeconds"></a>

```csharp
public double RepeatIntervalInSeconds { get; }
```

- *Type:* double

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; }
```

- *Type:* string

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptId"></a>

```csharp
public string ScriptId { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `ScriptParameters`<sup>Required</sup> <a name="ScriptParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.scriptParameters"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList ScriptParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VantagePointCount`<sup>Required</sup> <a name="VantagePointCount" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePointCount"></a>

```csharp
public double VantagePointCount { get; }
```

- *Type:* double

---

##### `VantagePoints`<sup>Required</sup> <a name="VantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.vantagePoints"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList VantagePoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItems">DataOciApmSyntheticsMonitorsMonitorCollectionItems</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramName">ParamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramValue">ParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParamName`<sup>Required</sup> <a name="ParamName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramName"></a>

```csharp
public string ParamName { get; }
```

- *Type:* string

---

##### `ParamValue`<sup>Required</sup> <a name="ParamValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.paramValue"></a>

```csharp
public string ParamValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameter</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isOverwritten">IsOverwritten</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isSecret">IsSecret</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.monitorScriptParameter">MonitorScriptParameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramName">ParamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramValue">ParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsOverwritten`<sup>Required</sup> <a name="IsOverwritten" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isOverwritten"></a>

```csharp
public IResolvable IsOverwritten { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSecret`<sup>Required</sup> <a name="IsSecret" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.isSecret"></a>

```csharp
public IResolvable IsSecret { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MonitorScriptParameter`<sup>Required</sup> <a name="MonitorScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.monitorScriptParameter"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList MonitorScriptParameter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersMonitorScriptParameterList</a>

---

##### `ParamName`<sup>Required</sup> <a name="ParamName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramName"></a>

```csharp
public string ParamName { get; }
```

- *Type:* string

---

##### `ParamValue`<sup>Required</sup> <a name="ParamValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.paramValue"></a>

```csharp
public string ParamValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParametersOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters">DataOciApmSyntheticsMonitorsMonitorCollectionItemsScriptParameters</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.workerList">WorkerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkerList`<sup>Required</sup> <a name="WorkerList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.workerList"></a>

```csharp
public string[] WorkerList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePointsOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints">DataOciApmSyntheticsMonitorsMonitorCollectionItemsVantagePoints</a>

---


### DataOciApmSyntheticsMonitorsMonitorCollectionList <a name="DataOciApmSyntheticsMonitorsMonitorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.get"></a>

```csharp
private DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference <a name="DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection">DataOciApmSyntheticsMonitorsMonitorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.items"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionItemsList">DataOciApmSyntheticsMonitorsMonitorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciApmSyntheticsMonitorsMonitorCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitors.DataOciApmSyntheticsMonitorsMonitorCollection">DataOciApmSyntheticsMonitorsMonitorCollection</a>

---



