# `dataOciFleetAppsManagementTaskRecords` Submodule <a name="`dataOciFleetAppsManagementTaskRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementTaskRecords <a name="DataOciFleetAppsManagementTaskRecords" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records oci_fleet_apps_management_task_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecords(Construct Scope, string Id, DataOciFleetAppsManagementTaskRecordsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig">DataOciFleetAppsManagementTaskRecordsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig">DataOciFleetAppsManagementTaskRecordsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlatform` <a name="ResetPlatform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecords resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementTaskRecords.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementTaskRecords.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementTaskRecords.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementTaskRecords.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecords resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementTaskRecords to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementTaskRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementTaskRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList">DataOciFleetAppsManagementTaskRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.taskRecordCollection">TaskRecordCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filter"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList">DataOciFleetAppsManagementTaskRecordsFilterList</a>

---

##### `TaskRecordCollection`<sup>Required</sup> <a name="TaskRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.taskRecordCollection"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList TaskRecordCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementTaskRecordsConfig <a name="DataOciFleetAppsManagementTaskRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsConfig {
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
    string Platform = null,
    string State = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#compartment_id DataOciFleetAppsManagementTaskRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#display_name DataOciFleetAppsManagementTaskRecords#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#id DataOciFleetAppsManagementTaskRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.platform">Platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#platform DataOciFleetAppsManagementTaskRecords#platform}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#state DataOciFleetAppsManagementTaskRecords#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#type DataOciFleetAppsManagementTaskRecords#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#compartment_id DataOciFleetAppsManagementTaskRecords#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#display_name DataOciFleetAppsManagementTaskRecords#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#filter DataOciFleetAppsManagementTaskRecords#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#id DataOciFleetAppsManagementTaskRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#platform DataOciFleetAppsManagementTaskRecords#platform}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#state DataOciFleetAppsManagementTaskRecords#state}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#type DataOciFleetAppsManagementTaskRecords#type}.

---

### DataOciFleetAppsManagementTaskRecordsFilter <a name="DataOciFleetAppsManagementTaskRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#name DataOciFleetAppsManagementTaskRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#values DataOciFleetAppsManagementTaskRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#regex DataOciFleetAppsManagementTaskRecords#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#name DataOciFleetAppsManagementTaskRecords#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#values DataOciFleetAppsManagementTaskRecords#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#regex DataOciFleetAppsManagementTaskRecords#regex}.

---

### DataOciFleetAppsManagementTaskRecordsTaskRecordCollection <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollection {

};
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems {

};
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails {

};
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails {

};
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent {

};
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables {

};
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables {

};
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementTaskRecordsFilterList <a name="DataOciFleetAppsManagementTaskRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetAppsManagementTaskRecordsFilterOutputReference <a name="DataOciFleetAppsManagementTaskRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.command">Command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.content">Content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.executionType">ExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.command"></a>

```csharp
public string Command { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.content"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList Content { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `ExecutionType`<sup>Required</sup> <a name="ExecutionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.executionType"></a>

```csharp
public string ExecutionType { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.variables"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList Variables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">OutputVariables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `OutputVariables`<sup>Required</sup> <a name="OutputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```csharp
public string[] OutputVariables { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.executionDetails">ExecutionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionDetails`<sup>Required</sup> <a name="ExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.executionDetails"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList ExecutionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList</a>

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.properties"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.numRetries">NumRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.numRetries"></a>

```csharp
public double NumRetries { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.details"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection">DataOciFleetAppsManagementTaskRecordsTaskRecordCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.items"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordsTaskRecordCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection">DataOciFleetAppsManagementTaskRecordsTaskRecordCollection</a>

---



