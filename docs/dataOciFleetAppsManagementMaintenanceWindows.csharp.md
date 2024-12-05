# `dataOciFleetAppsManagementMaintenanceWindows` Submodule <a name="`dataOciFleetAppsManagementMaintenanceWindows` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementMaintenanceWindows <a name="DataOciFleetAppsManagementMaintenanceWindows" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows oci_fleet_apps_management_maintenance_windows}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindows(Construct Scope, string Id, DataOciFleetAppsManagementMaintenanceWindowsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig">DataOciFleetAppsManagementMaintenanceWindowsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig">DataOciFleetAppsManagementMaintenanceWindowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindows resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementMaintenanceWindows.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementMaintenanceWindows.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementMaintenanceWindows.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementMaintenanceWindows.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindows resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementMaintenanceWindows to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementMaintenanceWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementMaintenanceWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList">DataOciFleetAppsManagementMaintenanceWindowsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.maintenanceWindowCollection">MaintenanceWindowCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filter"></a>

```csharp
public DataOciFleetAppsManagementMaintenanceWindowsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList">DataOciFleetAppsManagementMaintenanceWindowsFilterList</a>

---

##### `MaintenanceWindowCollection`<sup>Required</sup> <a name="MaintenanceWindowCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.maintenanceWindowCollection"></a>

```csharp
public DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList MaintenanceWindowCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementMaintenanceWindowsConfig <a name="DataOciFleetAppsManagementMaintenanceWindowsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsConfig {
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
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#compartment_id DataOciFleetAppsManagementMaintenanceWindows#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#display_name DataOciFleetAppsManagementMaintenanceWindows#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#id DataOciFleetAppsManagementMaintenanceWindows#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#state DataOciFleetAppsManagementMaintenanceWindows#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#compartment_id DataOciFleetAppsManagementMaintenanceWindows#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#display_name DataOciFleetAppsManagementMaintenanceWindows#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#filter DataOciFleetAppsManagementMaintenanceWindows#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#id DataOciFleetAppsManagementMaintenanceWindows#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#state DataOciFleetAppsManagementMaintenanceWindows#state}.

---

### DataOciFleetAppsManagementMaintenanceWindowsFilter <a name="DataOciFleetAppsManagementMaintenanceWindowsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#name DataOciFleetAppsManagementMaintenanceWindows#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#values DataOciFleetAppsManagementMaintenanceWindows#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#regex DataOciFleetAppsManagementMaintenanceWindows#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#name DataOciFleetAppsManagementMaintenanceWindows#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#values DataOciFleetAppsManagementMaintenanceWindows#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#regex DataOciFleetAppsManagementMaintenanceWindows#regex}.

---

### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection {

};
```


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementMaintenanceWindowsFilterList <a name="DataOciFleetAppsManagementMaintenanceWindowsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.get"></a>

```csharp
private DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference <a name="DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.get"></a>

```csharp
private DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isOutage">IsOutage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isRecurring">IsRecurring</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.maintenanceWindowType">MaintenanceWindowType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.recurrences">Recurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.taskInitiationCutoff">TaskInitiationCutoff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsOutage`<sup>Required</sup> <a name="IsOutage" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isOutage"></a>

```csharp
public IResolvable IsOutage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRecurring`<sup>Required</sup> <a name="IsRecurring" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isRecurring"></a>

```csharp
public IResolvable IsRecurring { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MaintenanceWindowType`<sup>Required</sup> <a name="MaintenanceWindowType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.maintenanceWindowType"></a>

```csharp
public string MaintenanceWindowType { get; }
```

- *Type:* string

---

##### `Recurrences`<sup>Required</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.recurrences"></a>

```csharp
public string Recurrences { get; }
```

- *Type:* string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TaskInitiationCutoff`<sup>Required</sup> <a name="TaskInitiationCutoff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.taskInitiationCutoff"></a>

```csharp
public double TaskInitiationCutoff { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeScheduleStart`<sup>Required</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeScheduleStart"></a>

```csharp
public string TimeScheduleStart { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems</a>

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.get"></a>

```csharp
private DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items"></a>

```csharp
public DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection</a>

---



