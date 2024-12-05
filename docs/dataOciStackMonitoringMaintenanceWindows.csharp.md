# `dataOciStackMonitoringMaintenanceWindows` Submodule <a name="`dataOciStackMonitoringMaintenanceWindows` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMaintenanceWindows <a name="DataOciStackMonitoringMaintenanceWindows" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows oci_stack_monitoring_maintenance_windows}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindows(Construct Scope, string Id, DataOciStackMonitoringMaintenanceWindowsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig">DataOciStackMonitoringMaintenanceWindowsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig">DataOciStackMonitoringMaintenanceWindowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetLifecycleDetails">ResetLifecycleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifecycleDetails` <a name="ResetLifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetLifecycleDetails"></a>

```csharp
private void ResetLifecycleDetails()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMaintenanceWindows resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringMaintenanceWindows.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringMaintenanceWindows.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringMaintenanceWindows.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciStackMonitoringMaintenanceWindows.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciStackMonitoringMaintenanceWindows resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStackMonitoringMaintenanceWindows to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStackMonitoringMaintenanceWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMaintenanceWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList">DataOciStackMonitoringMaintenanceWindowsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.maintenanceWindowCollection">MaintenanceWindowCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycleDetailsInput">LifecycleDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.filter"></a>

```csharp
public DataOciStackMonitoringMaintenanceWindowsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList">DataOciStackMonitoringMaintenanceWindowsFilterList</a>

---

##### `MaintenanceWindowCollection`<sup>Required</sup> <a name="MaintenanceWindowCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.maintenanceWindowCollection"></a>

```csharp
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList MaintenanceWindowCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleDetailsInput`<sup>Optional</sup> <a name="LifecycleDetailsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycleDetailsInput"></a>

```csharp
public string LifecycleDetailsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMaintenanceWindowsConfig <a name="DataOciStackMonitoringMaintenanceWindowsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null,
    string LifecycleDetails = null,
    string Name = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#compartment_id DataOciStackMonitoringMaintenanceWindows#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#id DataOciStackMonitoringMaintenanceWindows#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#lifecycle_details DataOciStackMonitoringMaintenanceWindows#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#status DataOciStackMonitoringMaintenanceWindows#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#compartment_id DataOciStackMonitoringMaintenanceWindows#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#filter DataOciStackMonitoringMaintenanceWindows#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#id DataOciStackMonitoringMaintenanceWindows#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleDetails`<sup>Optional</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#lifecycle_details DataOciStackMonitoringMaintenanceWindows#lifecycle_details}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#status DataOciStackMonitoringMaintenanceWindows#status}.

---

### DataOciStackMonitoringMaintenanceWindowsFilter <a name="DataOciStackMonitoringMaintenanceWindowsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#values DataOciStackMonitoringMaintenanceWindows#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#regex DataOciStackMonitoringMaintenanceWindows#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#values DataOciStackMonitoringMaintenanceWindows#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#regex DataOciStackMonitoringMaintenanceWindows#regex}.

---

### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection {

};
```


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems {

};
```


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMaintenanceWindowsFilterList <a name="DataOciStackMonitoringMaintenanceWindowsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.get"></a>

```csharp
private DataOciStackMonitoringMaintenanceWindowsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciStackMonitoringMaintenanceWindowsFilterOutputReference <a name="DataOciStackMonitoringMaintenanceWindowsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.get"></a>

```csharp
private DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.numberOfResources">NumberOfResources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.operationStatus">OperationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.operationType">OperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.schedule">Schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfResources`<sup>Required</sup> <a name="NumberOfResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.numberOfResources"></a>

```csharp
public double NumberOfResources { get; }
```

- *Type:* double

---

##### `OperationStatus`<sup>Required</sup> <a name="OperationStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.operationStatus"></a>

```csharp
public string OperationStatus { get; }
```

- *Type:* string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.operationType"></a>

```csharp
public string OperationType { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.schedule"></a>

```csharp
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList Schedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems</a>

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.get"></a>

```csharp
private DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.maintenanceWindowDuration">MaintenanceWindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.maintenanceWindowRecurrences">MaintenanceWindowRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.scheduleType">ScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.timeMaintenanceWindowEnd">TimeMaintenanceWindowEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.timeMaintenanceWindowStart">TimeMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDuration`<sup>Required</sup> <a name="MaintenanceWindowDuration" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.maintenanceWindowDuration"></a>

```csharp
public string MaintenanceWindowDuration { get; }
```

- *Type:* string

---

##### `MaintenanceWindowRecurrences`<sup>Required</sup> <a name="MaintenanceWindowRecurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.maintenanceWindowRecurrences"></a>

```csharp
public string MaintenanceWindowRecurrences { get; }
```

- *Type:* string

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.scheduleType"></a>

```csharp
public string ScheduleType { get; }
```

- *Type:* string

---

##### `TimeMaintenanceWindowEnd`<sup>Required</sup> <a name="TimeMaintenanceWindowEnd" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.timeMaintenanceWindowEnd"></a>

```csharp
public string TimeMaintenanceWindowEnd { get; }
```

- *Type:* string

---

##### `TimeMaintenanceWindowStart`<sup>Required</sup> <a name="TimeMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.timeMaintenanceWindowStart"></a>

```csharp
public string TimeMaintenanceWindowStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule</a>

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.get"></a>

```csharp
private DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items"></a>

```csharp
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection</a>

---



